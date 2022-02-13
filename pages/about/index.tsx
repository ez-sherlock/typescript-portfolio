import type { NextPage } from 'next'
import Head from 'next/head'
import AboutScreen from '../Screens/AboutScreen'
import { motion } from "framer-motion"


const About: NextPage = () => {



  return (
    <motion.div className='relative bg-black-prime'>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutScreen />
    </motion.div>
  )
}

export default About