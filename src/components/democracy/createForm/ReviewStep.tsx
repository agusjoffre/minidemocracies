import React from "react";
import { useFormContext } from "react-hook-form";

export function ReviewStep() {
  const { watch } = useFormContext();
  const values = watch();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Review your information</h3>
      <div>
        <strong>Name:</strong> {values.name}
      </div>
      <div>
        <strong>Description:</strong> {values.description || "N/A"}
      </div>
      <div>
        <strong>Banner URL:</strong> {values.banner_url || "N/A"}
      </div>
      <div>
        <strong>Is Public:</strong> {values.isPublic ? "Yes" : "No"}
      </div>
      <div>
        <strong>Color 1:</strong>{" "}
        <span style={{ backgroundColor: values.color1, padding: "0 10px" }}>
          {values.color1}
        </span>
      </div>
      {values.color2 && (
        <div>
          <strong>Color 2:</strong>{" "}
          <span style={{ backgroundColor: values.color2, padding: "0 10px" }}>
            {values.color2}
          </span>
        </div>
      )}
      {values.color3 && (
        <div>
          <strong>Color 3:</strong>{" "}
          <span style={{ backgroundColor: values.color3, padding: "0 10px" }}>
            {values.color3}
          </span>
        </div>
      )}
    </div>
  );
}
