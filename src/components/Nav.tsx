import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg-mx-32 ">
      <div>
        <img src="/avatar.png" alt="Profile picture" />
      </div>
      <h1 className="text-lg font-bold">
        <a href="/">Jaelyn.</a>
      </h1>
      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      )}
      {!matches && (
        <div
          onClick={() => setToggled((preToggle) => !preToggle)}
          className="space-y-1 cursor-pointer z-50"
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}
      {toggled && !matches && (
        <div className="flex items-center justify-center fixed bg-white bottom-0 left-0 w-full h-screen">
          <div className="flex flex-col gap-24 text-lg">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
