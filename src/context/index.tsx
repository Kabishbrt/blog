"use client";

import { Spinner } from "@/app/components/spinner";
import { BlogFormData } from "@/utils/types";
import { useSession } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { initialBlogFormData } from "@/utils";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({children}:{children:ReactNode}){
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialBlogFormData);
    const {data:session}= useSession();

    if(session === undefined) return <Spinner/>
    else{

      return (
          <GlobalContext.Provider value={{loading, setLoading,formData, setFormData}}>
              {children}
          </GlobalContext.Provider>
      )
    }

} 