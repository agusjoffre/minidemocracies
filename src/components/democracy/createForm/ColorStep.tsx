import React from "react";
import { useFormContext } from "react-hook-form";
import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";

export function ColorStep() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const color1 = watch("color1");
  const color2 = watch("color2");
  const color3 = watch("color3");

  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="color1">Color 1 (Required)</Label>
        <HexColorPicker
          color={color1}
          onChange={(color) => setValue("color1", color)}
        />
        <input type="hidden" {...register("color1")} />
        {errors.color1 && (
          <p className="text-red-500">{errors.color1.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="color2">Color 2 (Optional)</Label>
        <HexColorPicker
          color={color2}
          onChange={(color) => setValue("color2", color)}
        />
        <input type="hidden" {...register("color2")} />
        {errors.color2 && (
          <p className="text-red-500">{errors.color2.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="color3">Color 3 (Optional)</Label>
        <HexColorPicker
          color={color3}
          onChange={(color) => setValue("color3", color)}
        />
        <input type="hidden" {...register("color3")} />
        {errors.color3 && (
          <p className="text-red-500">{errors.color3.message as string}</p>
        )}
      </div>
    </div>
  );
}
