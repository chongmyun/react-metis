import Image from 'next/image'
import clsx from "clsx";

export default function LoginForm(){

  const libName = process.env.LIB_NAME;
  const loginLogo = clsx('flex flex-col absolute w-[340px] h-[440px] top-[-20px] left-[40px] bg-[#402c41]',{
    "!bg-sky-600" : libName === 'ariline',
  });
  const loginButton = clsx('btn-login',{
    "!bg-sky-200" : libName === 'ariline',
  });
  const logo = clsx('bg-login-logo bg-no-repeat w-60 h-40 max-h-72',{
    "h-28" : libName === 'ariline',
  });

  return (
      <>
      <div className='flex flex-col justify-center items-center h-[85%]'>
        <div className='relative border-b border-b-[#ccc] w-[70%]'>
          <label htmlFor='user_id' className='absolute top-[10px] cursor-pointer font-bold'>
            <Image src="/img/icon/icon_id.png" alt='login user id input' width={13} height={13}/>
          </label>
          <input type='text' id='user_id' name="user_id" className='login-input' placeholder="ID"/>
        </div>
        <div className='relative border-b border-b-[#ccc] w-[70%]'>
          <label htmlFor='password' className='absolute top-[10px] cursor-pointer font-bold'>
            <Image src="/img/icon/icon_pw.png" alt='login user id input' width={13} height={13}/>
          </label>
          <input type='password' id='password' name="password" className='login-input' placeholder="Password"/>
        </div>
        <div className='mt-5 relative w-[70%]'>
          <span className="common-checkbox">
            <input type="checkbox" id="idSaveCh"/>
            <label htmlFor="idSaveCh" className='!mr-10'>ID 저장</label>
          </span>
          <span className="common-checkbox">
            <input type="checkbox" id="pwSaveCh"/>
            <label htmlFor="pwSaveCh">Password 저장</label>
            </span>
        </div>
      </div>
      <button className={loginButton}>
        Login
      </button>
      <div className={loginLogo}>
        <div className="flex flex-col justify-center items-center h-4/6">
          <h1 className={logo}></h1>
          {libName && <div className="text-3xl text-white font-semibold">국립항공도서관</div>}
        </div>
        <div className="flex flex-col justify-center items-start h-2/6 ml-6">
          {libName && <Image src='/img/logo.png' alt='알파스 메인로고' width={64} height={47}/>}
          <div className='text-base'>Version : </div>
        </div>
      </div>
      </>
  );
}