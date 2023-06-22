"use client"
import Image from "next/image"
import HTMLFlipBook from "react-pageflip"
import { forwardRef } from "react"

export default function Storybook({ story }: { story: Story}){
  const { title, body, image} = story
  return (
    <HTMLFlipBook autoSize={true} width={300} height={500} className=" text-black">
      <Image src={image} width={400} height={500} alt="book cover" className="fixed bottom-0 -z-10"/>
      <div className="demoPage bg-white">
        <h2 className="text-xl p-2 text-center">{title.replace(",","")}</h2>
      </div>
      <div className="demoPage bg-white">Page 4</div>
    </HTMLFlipBook>
  )
};