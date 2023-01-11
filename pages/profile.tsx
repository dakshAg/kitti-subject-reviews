import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import ProfileDrawer from '../components/ProfileDrawer';
import TitleBar from '../components/TitleBar';
import Avatar from '@mui/material/Avatar';
import styles from '../styles/Profile.module.css'
import { Badge } from '../components/Badge'


export default function Home() {
    return (
        <>
            <Head>
                <title>My Profile</title>
                <meta name="description" content="New Users Sign Up to Post Reviews and Comments on Kitti Subject Reviews and Ratings for The University of Melbourne" />
                <meta name="keywords" content="Sign Up, Kitti Subject Reviews, University of Melbourne" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <main className={styles.main}>
                <div className={styles.horizontal}>
                    <Avatar alt="Lemy Sharp" src="/images/supes.jpeg" sx={{ width: 80, height: 80, boxShadow: 10 }} />
                    <div>
                        <h1>Superman</h1>
                        <h2>Man of Steel</h2>
                    </div>
                </div>
                <Badge></Badge>
            </main>
        </>
    )
}