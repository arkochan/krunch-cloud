import React from 'react'

export default function Favourite({ favourite }: {
    favourite: boolean
}) {
    return (
        <div className="text-white size-7 absolute top-2 bg-orange-FE flex items-center justify-cente rounded-full p-1  right-2">
            {/* Heart Svg */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={favourite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </div>
    )
}
