'use client'
import React from 'react'
import Image from 'next/image'
import { heroperfeum, perfeumbanner } from '@/public'
import { motion } from 'framer-motion'
export default function Hero() {

  const variants = {
    hidden:{x:0,y:70,opacity:0.25},
    visible:{x:0,y:-10,opacity:1,transition:{delay:0.05}}
  }

  return (
    <div className='w-full pt-10  flex items-center '>
      <div className='h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center relative px-4 md:px-0'>
        <div className='object-cover'>
          <Image
            src={heroperfeum}
            height="100"
            width="1400"
            alt=''
            className='pb-80'
          />
        </div>

        <div className='absolute'>
          <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          >
            <Image
              src={perfeumbanner}
              height="60"
              width="700"
              alt=''
              className='mt-56'
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}
