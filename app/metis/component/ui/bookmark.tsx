import React, {useEffect, useState} from "react";
import BookmarkButton, {SideBookMarkButton} from "@/app/metis/component/ui/bookmark-button";
import SidebarContext from "@/app/metis/context/sidebar-context";
import {useContext} from "react";

const bookMarkList = [
  {
    src: {
      off: '/img/left_menu_icon_01_off.png',
      on: '/img/left_menu_icon_01_on.png'
    },
    smallSrc: {
      off: '/img/left_menu_icon_small_01_off.png'
      , on: '/img/left_menu_icon_small_01_on.png'
    },
    name: "단행", fullName: "단행자료"
  },
  {
    src: {
      off: '/img/left_menu_icon_02_off.png',
      on: '/img/left_menu_icon_02_on.png'
    },
    smallSrc: {
      off: '/img/left_menu_icon_small_02_off.png'
      , on: '/img/left_menu_icon_small_02_on.png'
    },
    name: "연속", fullName: "연속간행자료"
  },
  {
    src: {
      off: '/img/left_menu_icon_03_off.png'
      , on: '/img/left_menu_icon_03_on.png'
    },
    smallSrc: {
      off: '/img/left_menu_icon_small_03_off.png'
      , on: '/img/left_menu_icon_small_03_on.png'
    },
    name: "공통", fullName: "공통"
  }
];

'/img/left_menu_icon_small_03_off.png'


/*
* 사이드바 토글 후 북마크버튼
* */

export function SideBarBookMark(){

  const {openIndex,handleOpen} = useContext(SidebarContext);
  const renderedBookMark = bookMarkList.map((item, index) => {
    if(index === openIndex){
      return <SideBookMarkButton key={index} index={index} smallSrc={item.smallSrc} fullName={item.fullName} isOpen handleOpen={handleOpen}/>
    }else{
      return <SideBookMarkButton key={index} index={index} smallSrc={item.smallSrc} fullName={item.fullName} handleOpen={handleOpen}/>
    }
  });

  return <div>
    {renderedBookMark}
  </div>
}

/*
* 사이드바 토글 전 북마크버튼
* */
export default function Bookmark(){

  const {openIndex,handleOpen} = useContext(SidebarContext);

  const renderedBookMark = bookMarkList.map((item, index) => {
    if(index === openIndex){
      return <BookmarkButton key={index} index={index} src={item.src} name={item.name} isOpen handleOpen={handleOpen}/>
    }else{
      return <BookmarkButton key={index} index={index} src={item.src} name={item.name} handleOpen={handleOpen}/>
    }
  });


  return (<div>
    {renderedBookMark}
  </div>)
}

