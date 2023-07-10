'use client';
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookChat() {
  return (
    <FacebookProvider appId="297044169365979" chatSupport>
      <CustomChat pageId="104003389429973" minimized={true}/>
    </FacebookProvider>    
  )
}
