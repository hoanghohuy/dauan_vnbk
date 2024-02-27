import React from 'react'
import TabThele from './tab_thele/tabThele'

export default function Thele() {
  return (
    <section className='pt-5' id='thele'>
        <div className='bg-white px-12 py-6 rounded-xl max-w-[672px] mx-auto flex flex-col gap-3'>
            <div className='text-[15px] font-[500] leading-[24px]'>
                Hãy chia sẻ những kỷ niệm tại một vùng đất trên thế giới mà bạn đã đi qua! Trong đó ghi lại cảm nhận của bạn về cảnh đẹp, con người, văn hóa, hoạt động thú vị,... để truyền cảm hứng, thu hút bạn đọc đến vùng đất này.
            </div>
            <img src="/banner_thele.png" alt='banner the le' />
            <TabThele />
        </div>
    </section>
  )
}
