import Image from "next/image";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {FiChevronDown} from "react-icons/fi";
import clsx from "clsx";
interface BookMarkProps{
  index:number;
  src?: { on:string,off:string };
  name?:string;
  smallSrc?:{ on:string,off:string };
  fullName?:string;
  isOpen?:boolean;
  handleOpen: (index:number) => void;
}
type BookMarkGroup = {src:{ on:string,off:string }; name:string};
type SideBarBookMarkGroup = {smallSrc:{ on:string,off:string }; fullName:string};

/*
* 사이드바 토글 후 북마크버튼
* */
export function SideBookMarkButton({index,smallSrc,fullName,isOpen,handleOpen}:BookMarkProps & SideBarBookMarkGroup){

  const classes = clsx('relative flex items-center',{
    'text-[#f8775f]': isOpen
  })

  return(
      <div className='border-b border-b-[#6e646f]'>
        <button onClick={()=> handleOpen(index)} className='side-book-mark-button'>
          <div className={classes}>
            <Image src={isOpen ? smallSrc.on : smallSrc.off} alt={fullName} width={16} height={18} priority/>
            <div className='ml-2.5'>{fullName}</div>
            <div className='absolute top-1.5 right-5'><FiChevronDown/></div>
          </div>
        </button>
        {isOpen &&
            <motion.div initial={{height:0,opacity: 0}}
                        animate={{minHeight:"80px",opacity: 1}}
                        transition={{ ease: "easeIn",duration: 0.3,}}
                        className='w-full'>

            </motion.div>
        }
      </div>
  );
}

/*
* 사이드바 토글 전 북마크버튼
* */
export default function BookmarkButton({index,src,name,isOpen,handleOpen}:BookMarkProps & BookMarkGroup){

  return (
      <div className='relative'>
        <button onClick={()=> handleOpen(index)} className='item-center flex-col book-mark-button'>
          <Image src={isOpen ? src.on : src.off} alt={name} width={22} height={26} priority/>
          <div className={isOpen ? 'text-[#f8775f]' : ''}>{name}</div>
        </button>
        {isOpen &&
            <div className='book-mark-wrap'>123</div>
        }
      </div>
  )
}