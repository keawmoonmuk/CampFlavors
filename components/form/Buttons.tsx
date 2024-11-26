"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className={`${className} capitalize flex items-center gap-2 transition-all duration-300 hover:scale-105`}
      size={size}
    >
      {pending ? (
        <>
          <Loader className="animate-spin w-4 h-4" />
          <span className="text-sm font-medium">Processing...</span>
        </>
      ) : (
        <span className="font-semibold tracking-wide">{text}</span>
      )}
    </Button>
  );
};
