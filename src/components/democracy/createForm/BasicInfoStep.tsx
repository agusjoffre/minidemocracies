import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function BasicInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500">{errors.name.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          className="h-24"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="banner_url">Banner URL</Label>
        <Input id="banner_url" {...register("banner_url")} />
        {errors.banner_url && (
          <p className="text-red-500">{errors.banner_url.message as string}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="isPublic" {...register("isPublic")} />
        <Label htmlFor="isPublic">Is Public</Label>
      </div>
    </div>
  );
}
