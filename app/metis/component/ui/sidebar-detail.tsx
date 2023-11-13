import Image from "next/image";
import React, {useEffect, useState} from "react";
import {FiChevronRight} from "react-icons/fi";
import Link from "next/link";
import {SideBarBookMark} from "@/app/metis/component/ui/bookmark";
import MetisButton from "@/app/metis/component/ui/metis-button";

export default function SidebarDetail({handleClick}: { handleClick: () => void}) {
  const [isToggle,setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  useEffect(() =>{
    const handler = (event: MouseEvent) => {
      if(!(event.target as HTMLElement).closest('.profile_popup_menu')){
        setIsToggle(false);
      }
    }
    document.addEventListener('click', handler);
    return () =>{
      document.removeEventListener('click', handler);
    }
  });

  const handleButtonClick = () => {

  }


  return <div className='.'>
    <div className='flex justify-end'>
      <div className='absolute top-4 left-4'>
        <Image src='/img/profile_portrait.png' alt='none profile' width={30} height={30}/>
      </div>
      <button onClick={handleClick} className="item-center h-16 w-16  !border-y-emerald-300 !border-y-2">
        <Image src="/img/left_menu_fold.png" alt='사이드바 버튼' width={12} height={19}/>
      </button>
    </div>
    <div className="profile_box">
      <div className="profile_detail_box">
        <div className="user_name relative">
          <span>MA 도서관</span>
          <button onClick={handleToggle}>
            <Image src='/img/icon/icon_user_info.png' alt='이용자 정보팝업' width={15} height={15}/>
          </button>
          { isToggle &&
            <div className="profile_popup_menu">
              <ul>
                <li><FiChevronRight className='text-red-400'/><Link href="/metis/dashboard">홈으로</Link></li>
                <li><FiChevronRight className='text-red-400'/><a>고객센터</a></li>
                <li><FiChevronRight className='text-red-400'/><a>화면옵션</a></li>
                <li><FiChevronRight className='text-red-400'/><a>내정보수정</a></li>
                <li><FiChevronRight className='text-red-400'/><a>패스워드</a></li>
                <li><FiChevronRight className='text-red-400'/><a>로그아웃</a></li>
              </ul>
            </div>
          }
        </div>
        <div className="email_address"><span>na.byeongeun@eco.kr</span></div>
      </div>
    </div>
    <SideBarBookMark/>
    <div className='grid grid-cols-1 p-4 gap-4'>
      <MetisButton onClick={handleButtonClick} name='메뉴얼 다운로드'/>
      <MetisButton onClick={handleButtonClick} name='개선노트 다운로드'/>
      <MetisButton onClick={handleButtonClick} name='환경설정 변경적용'/>
      <div className='text-center'>Alpas Version: </div>
    </div>
  </div>

}