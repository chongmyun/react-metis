import LoginForm from "@/app/ui/login/login-form";
import clsx from "clsx";
import {Suspense} from "react";

export default function LoginPage(){
  const libName = process.env.LIB_NAME;

  const loginForm = clsx('relative h-[400px] w-[780px] bg-[#5f3c61] pl-[380px] text-[#ccc]',{
    "!bg-white" : libName === 'ariline',
  });

  return <>
    <div className='fixed inset-0 bg-login-background z-[-1]'></div>
    <div className='grid place-items-center min-h-[100dvh]'>
      <div className={loginForm}>
        <LoginForm/>
      </div>
    </div>
  </>
};