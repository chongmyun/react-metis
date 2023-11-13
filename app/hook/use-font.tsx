import localFont from "next/font/local";

export const notoSans = localFont({
  src:[
    {
      path:'../fonts/NotoSansKR-Light.woff2',
      weight:'300',
      style:'normal'
    },
    {
      path:'../fonts/NotoSansKR-Light.woff',
      weight:'300',
      style:'normal'
    },
    {
      path:'../fonts/NotoSansKR-Light.otf',
      weight:'300',
      style:'normal'
    },
    {
      path:'../fonts/NotoSansKR-Medium.woff2',
      weight:'500',
      style:'normal'
    },
    {
      path:'../fonts/NotoSansKR-Medium.woff',
      weight:'500',
      style:'normal'
    },
    {
      path:'../fonts/NotoSansKR-Medium.otf',
      weight:'500',
      style:'normal'
    }
  ]
})

