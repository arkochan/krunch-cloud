"use client";
import React from 'react'
import Image from 'next/image'

export default function ProfilePhoto({ picture }: { picture: string }) {
  // Function to get a cookie value by name
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  // Retrieve and unescape the profile photo URL from the cookie
  const profilePhotoUrl = decodeURIComponent(getCookie('profile_photo') || picture);
  console.log(decodeURIComponent(getCookie('profile_photo') || ''));

  return (
    <div>
      <img
        className=" size-9 rounded-xl "
        src={profilePhotoUrl}
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  )
}
