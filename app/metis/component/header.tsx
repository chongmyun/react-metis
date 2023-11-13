import Image from "next/image";
import Link from "next/link";
import {FaBars} from "react-icons/fa";
import React from "react";

export default function Header() {
  return (
  <header className="main-header">
    <div className='flex justify-between items-center h-full'>
      <div className='item-center'>
        <Image src="/img/logo_menu.png" alt='알파스 메인로고' width={95} height={36}/>
        <Link href='/metis/dashboard' className='text-[22px] text-white font-medium ml-8 hover:text-white active:text-white'>행복도서관 [MA]</Link>
        <select className='ml-5 mt-1 w-40'>
          <option>MA | 행복도서관</option>
        </select>
      </div>
      <div className='item-center h-full'>
        <ul className="flex text-white header-right-tab">
          <li className='!mr-10'><a id="support_call_number" >문의 : 1599-5478</a></li>
          <li>
            <Link href='/metis/dashoboard'>
              <Image src='/img/right_head_click_03.png' alt='홈으로' width={20} height={18}/>
            </Link>
          </li>
          <li><a><Image src='/img/right_head_click_05.png' alt='설정' width={20} height={18}/></a></li>
          <li><a><Image src='/img/right_head_click_07.png' alt='문의' width={20} height={18}/></a></li>
          <li><a><Image src='/img/right_head_click_09.png' alt='북마크' width={20} height={18}/></a></li>
          <li><a><Image src='/img/right_head_click_12.png' alt='메뉴열' width={20} height={18}/></a></li>
          <li className='!mr-5'><a><Image src='/img/right_head_click_11.png' alt='로그아웃' width={20} height={18}/></a></li>
        </ul>
        <div className='h-full'>
          <button className='item-center h-full w-16 bg-black text-white text-xl'>
            <FaBars/>
          </button>
        </div>
      </div>
    </div>
  </header>)
}