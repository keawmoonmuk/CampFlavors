"use client";

import { useToast } from "@/hooks/use-toast";
import { useActionState } from "react";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";
const initialState = {
  message: "Hello World",
};


const FormContainer = ({action,children}: {action: actionFunction; children: React.ReactNode}) => {

  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);

  console.log(state);

  useEffect(() => {
    if(state && state.message) {
      toast({
        title: "Success",
        description: state.message,
      })
    }
  },[state])

  
  return <form action={formAction}> {children}</form>;
};
export default FormContainer;
