import Sidebar from "@/app/metis/component/sidebar";
import {SideBarProvider} from "@/app/metis/context/sidebar-context";
import React from "react";
import Header from "@/app/metis/component/header";

export default function Layout({children,menu}:{children:React.ReactNode,menu:React.ReactElement}){

  return (
    <div className='root_container'>
      <Header/>
      <SideBarProvider>
        <Sidebar/>
      </SideBarProvider>
      <main className='main-content'>
        <div className='p-6 w-full h-full'>
          {children}
        </div>
      </main>
    </div>
  )
}