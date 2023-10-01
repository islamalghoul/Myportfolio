'use client'
import Header from '@/components/Header'
import Head from 'next/head';
import Main from '@/components/Main';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <>
     <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&family=Work+Sans:wght@100;600&display=swap" rel="stylesheet"/>
              
      </Head>
      
    <Header/>
    <motion.div
      initial={{ opacity: 0 , y:15}}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: .5}}
    >
    <Main/>
    </motion.div>
    </>
  )
}
