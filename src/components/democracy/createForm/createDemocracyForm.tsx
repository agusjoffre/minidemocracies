"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { BasicInfoStep } from "./BasicInfoStep";
import { ColorStep } from "./ColorStep";
import { ReviewStep } from "./ReviewStep";
import { Progress } from "@/components/ui/progress";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { createDemocracy } from "@/lib/actions/minidemocracies/createDemocracy";
import { Democracy, Membership, Status } from "@/lib/types";
import { createMembership } from "@/lib/actions/memberships/createMembership";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
};

const democracySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  banner_url: z.string().optional(),
  isPublic: z.boolean(),
  color1: z.string().regex(/^#([0-9A-F]{3}){1,2}$/i, "Invalid color format"),
  color2: z
    .string()
    .regex(/^#([0-9A-F]{3}){1,2}$/i)
    .optional(),
  color3: z
    .string()
    .regex(/^#([0-9A-F]{3}){1,2}$/i)
    .optional(),
});

type DemocracySchema = z.infer<typeof democracySchema>;

const steps = ["Basic Info", "Colors", "Review"];

export function DemocracyForm({ userId }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();

  const methods = useForm<DemocracySchema>({
    resolver: zodResolver(democracySchema),
    defaultValues: {
      name: "",
      description: "",
      banner_url: "",
      isPublic: false,
      color1: "#000000",
      color2: "",
      color3: "",
    },
  });

  const {
    data: createMembershipResponse,
    mutate: mutateCreateMembership,
    isPending: isCreatingMembership,
  } = useMutation({
    mutationFn: async (democracyId: string) => {
      const newMembership: Omit<Membership, "id"> = {
        user_id: userId,
        status: Status.ACCEPTED,
        minidemocracy_id: democracyId,
      };

      return await createMembership(newMembership);
    },
    onSuccess: (data) => {
      if (!data.success) {
        router.push("/dashboard");
        console.log(data.error);
      }

      if (!data.data) {
        router.push("/dashboard");
        console.log(data.error);
      }

      setCurrentStep(3);
      router.push(`/democracies/${data.data?.minidemocracy_id}`);
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  const {
    data: createDemocracyResponse,
    mutate: mutateCreateDemocracy,
    isPending: isCreatingDemocracy,
  } = useMutation({
    mutationFn: async (democracy: DemocracySchema) => {
      const newDemocracy: Omit<Democracy, "id" | "invite_code"> = {
        ...democracy,
        creator_id: userId,
      };
      return await createDemocracy(newDemocracy);
    },
    onSuccess: (data) => {
      if (!data.success) {
        router.push("/dashboard");
        console.log(data.error);
      }

      if (!data.data) {
        router.push("/dashboard");
        console.log(data.error);
      }

      mutateCreateMembership(data.data?.id as string);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const submit = (data: DemocracySchema) => {
    mutateCreateDemocracy(data);
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="space-y-8">
        <div className="text-xl font-medium mb-4">{steps[currentStep]}</div>

        <Progress
          value={(currentStep / steps.length) * 100}
          className={currentStep === 3 ? "bg-accent" : ""}
        />

        {currentStep === 0 && <BasicInfoStep />}
        {currentStep === 1 && <ColorStep />}
        {currentStep === 2 && <ReviewStep />}

        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button type="button" onClick={prevStep} variant={"outline"}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="button" onClick={nextStep} variant={"outline"}>
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
              type="submit"
              variant={"accent"}
              disabled={isCreatingDemocracy || isCreatingMembership}
            >
              {isCreatingDemocracy || isCreatingMembership ? (
                <Loader />
              ) : (
                "Create"
              )}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
