import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
}
const itemMotion = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
}

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
      {/* hamburger bar */}
      {!matches && (
        <div
          onClick={() => setToggled((preToggle) => !preToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}
      {/* toggle nav */}
      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
            w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <motion.a variants={itemMotion} href="/">
            Home
          </motion.a>
          <motion.a variants={itemMotion} href="/services">
            Services
          </motion.a>
          <motion.a variants={itemMotion} href="/contact">
            Contact
          </motion.a>
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg"
      ></motion.div>
    </nav>
  )
}
