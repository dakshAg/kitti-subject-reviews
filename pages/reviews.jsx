import Head from 'next/head'
import React, { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../constants/firebase-config';
import { ReviewRow } from '../components/ReviewRow';
import { TextField, Autocomplete } from '@mui/material';
import TitleBar from '../components/TitleBar'

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
}