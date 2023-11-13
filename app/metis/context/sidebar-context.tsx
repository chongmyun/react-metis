'use client';
import {createContext, useEffect} from "react";
import React,{useState} from "react";

const SidebarContext = createContext({
  openIndex: -1,
  handleOpen: (index:number) => {}
});

export function SideBarProvider({children}:{children:React.ReactNode}){

  const [openIndex,setOpenIndex] = useState(-1);

  const handleOpen = (index:number) => {
    if(openIndex === index){
      setOpenIndex(-1);
    }else{
      setOpenIndex(index);
    }
  }

  return <SidebarContext.Provider value={{openIndex,handleOpen}}>
    {children}
  </SidebarContext.Provider>
}

export default SidebarContext;
