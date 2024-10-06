import React from 'react'
import Image from 'next/image'
export default function ProfilePhoto({ picture }: {
  picture: string
}) {
  return (
    <div>
      <Image
        className=" size-9 rounded-xl "
        src={picture}
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  )
}
