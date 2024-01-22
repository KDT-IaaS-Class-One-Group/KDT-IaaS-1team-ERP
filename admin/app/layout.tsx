
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css';
import Reload from './ui/layoutButtons/reloadButton'
import LoginButton from './ui/layoutButtons/loginButton'
import SignupButton from './ui/layoutButtons/signupButton';
import BackButton from './ui/backButton';
import ApplyButton from './ui/mainButtons/applyButton';
import InvoiceButton from './ui/mainButtons/invoiceButton';
import ListButton from './ui/mainButtons/listButton';
import ManageButton from './ui/mainButtons/manageButton';
import QnaButton from './ui/mainButtons/qnaButton';
import ChartButton from './ui/mainButtons/chartButton';
import CateApplyButton from './ui/mainButtons/cateApplyButton';

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
        <div className='w-48 flex justify-around relative left-3/4'>
            <BackButton />
            <LoginButton />
        <div>
            <SignupButton />
        </div>
        </div>
      </div>
      <div>
      <div className='flex'>
      <div className='w-1/6 h-lvh flex flex-col justify-around items-center mt-8 overflow-y-auto'>
        <ListButton />
        <CateApplyButton />
        <ApplyButton />
        <ManageButton />
        <InvoiceButton />
        <QnaButton />
        <ChartButton />
      </div>
      {children}
      </div>
      </div>
      </body>
    </html>
  )
}