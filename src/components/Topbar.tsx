import React from 'react'
import Image from 'next/image'
import ProfilePhoto from './ui/ProfilePhoto'
import Link from 'next/link'

export default function Topbar() {
  return (
    <div>
      <button className="size-9 shadow-1 flex justify-center items-center rounded-xl  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div>{"Cart"}</div>
      <Link href="http://localhost:8090/auth/login/google">
        <ProfilePhoto picture="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=250&t=st=1725264514~exp=1725265114~hmac=d1dfdb73697b715c1efc1643b2cdd5c9e7c76eef32dd84340d0ce6eee13fb078" />
      </Link>

    </div>
  )
}
