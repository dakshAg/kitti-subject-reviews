import Head from 'next/head'
import React, { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ReviewRow } from '../components/HomeReviewRow';
import { TextField, Autocomplete, Card, Avatar, Stack } from '@mui/material';
import TitleBar from '../components/TitleBar'

import prisma from '/lib/prisma';

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../constants/firebase-config';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

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

        <Card >
          <Stack direction="row">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Stack direction="column">
              <h4>Alan Walker</h4>
              <p>@alanwalker</p>
            </Stack>
          </Stack>
        </Card>

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
    where: { year: "2022" },
    include: {
      responses: true,
    }
  });

  return {
    props: {
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  }
}
/*export async function getServerSideProps() {
  const app = initializeApp(firebaseConfig);

  const dbRef = ref(getDatabase());
  const reviews = await get(child(dbRef, `reviews`)).then((snapshot) => {
    var r = []
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot);
        r.push(childSnapshot.val())
      })
      console.log(r);
      return r;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  console.log("Reviews", reviews)

  return {
    props: {
      reviews,
    },
  }
}*/