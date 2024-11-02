import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { actionFunction } from "@/utils/types";
import React, { ReactNode, useEffect } from "react";
// import {useActionState } from "react-dom";
import { useActionState } from "react";
const initialState = {
  message: "",
};
function FormContainer({
  action,
  children,
  className
}: {
  action: actionFunction;
  children: ReactNode;
  className?:string
}) {
  const [state, formAction] = useActionState(action, initialState);
  const {toast} = useToast();
  useEffect(()=>{
    if(state.message){
        toast({description:state.message})
        console.log(state.message);
    }
  },[state])
  return (
      <form action={formAction} className={cn("",className)}>{children}</form>
  );
}

export default FormContainer;
