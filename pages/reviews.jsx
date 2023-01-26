import Head from 'next/head'
import React, { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ReviewRow } from '../components/ReviewRow';
import { TextField, Autocomplete } from '@mui/material';
import TitleBar from '../components/TitleBar'

import prisma from '/lib/prisma';

const inter = Inter({ subsets: ['latin'] })
export default function Home({ reviews }) {


  return (
    <>
      <Head>
        <title>Read Subject Reviews for UniMelb | Kitti</title>
        <meta name="description" content="Search and Read Subject Reviews from University of Melbourne Students, to get better at Course Planning." />
        <meta name="keywords" content="Subject Reviews, Ratings, University of Melbourne, Unimelb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBar />
      <main className={styles.main}>

        <h1>Browse UniMelb Subject Reviews</h1>

        {
          reviews.map((review) =>
            <ReviewRow review={review} />
          )
        }
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const reviews = await prisma.review.findMany({
    where: { year: "2022" }
  });

  return {
    props: {
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  }
}