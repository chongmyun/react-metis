'use client';
import React, {useEffect, useState} from "react";
import clsx from "clsx";
import Image from "next/image";
import Bookmark from "@/app/metis/component/ui/bookmark";
import SidebarDetail from "@/app/metis/component/ui/sidebar-detail";
import SidebarContext from "@/app/metis/context/sidebar-context";
import {useContext} from "react";

export default function Sidebar(){

  const [isToggle, setIsToggle] = useState(false);
  const classes = clsx('side-bar', {
      '!w-[200px]': isToggle
  });

  const handleClick = () => {
    setIsToggle(!isToggle);
  }
  const {handleOpen} = useContext(SidebarContext);

  useEffect(() =>{
    const handler = (event: MouseEvent) => {
      if(!(event.target as HTMLElement).closest('.side-bar')){
        handleOpen(-1);
      }
    }
    document.addEventListener('click', handler);
    return () =>{
      document.removeEventListener('click', handler);
    }
  });

  return (
      <aside className={classes}>
        <div>
          {isToggle ? <SidebarDetail handleClick={handleClick}/> :
          <div>
            <button onClick={handleClick} className="item-center bg-black w-full h-16 !border-y-emerald-300 !border-y-2">
              <Image src="/img/left_menu_fold.png" alt='사이드바 버튼' width={12} height={19} className='rotate-180'/>
            </button>
            <Bookmark/>
          </div>
          }
        </div>
      </aside>
  )
}