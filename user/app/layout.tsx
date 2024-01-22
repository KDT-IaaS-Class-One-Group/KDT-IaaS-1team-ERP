
import type { Metadata } from 'next'
import '@/app/ui/globals.css';
import Reload from './ui/layoutButtons/reloadButton'
import LoginButton from './ui/layoutButtons/loginButton'
import MyPageButton from './ui/layoutButtons/mypagebutton';
import SignupButton from './ui/layoutButtons/signupButton';
import CartButton from './ui/layoutButtons/cartButton';
import MyStatus from './ui/status';
import BoardButton from './ui/layoutButtons/boardButton';

export const metadata: Metadata = {
  title: 'DyaBya ERP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex w-lvw h-20 items-center pl-10'> 
            <Reload />
          <div className='relative left-1/2'>
            <MyStatus />
          </div>
        <div className='w-96 flex absolute left-3/4 justify-between'>
          <div>
            <CartButton />
          </div>
          <div>
            <MyPageButton />
          </div>
          <div>
            <BoardButton />
          </div>            
            <LoginButton />
          <div>
            <SignupButton />
          </div>
        </div>
      </div>
      {children}
      </body>
    </html>
  )
}