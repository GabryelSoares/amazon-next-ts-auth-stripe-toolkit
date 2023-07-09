'use client';
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookMsg() {
  return (
    <FacebookProvider appId="297044169365979" chatSupport>
      <CustomChat pageId="114332774494623" minimized={true}/>
    </FacebookProvider>    
  )
}
