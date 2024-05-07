"use client";

import useGlobalContext from "@/hooks/useGlobalContext";

export default function HeaderDesktopMenu() {
  const { isDesktopMenuVisible } = useGlobalContext();

  return (
    <div className='bg-white w-screen flex'>
      <p className='text-black'> FLOATING NAVBAR </p>
    </div>
  );
}
