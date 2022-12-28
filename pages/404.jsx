import Head from 'next/head'
import TitleBar from '../components/TitleBar';
import Image from 'next/image'
import { Button } from "@mui/material";
import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>404 Page not Found | Kitti Subject Reviews</title>
                <meta name="description" content="Congratulations! You found PartyBlob. Look at him go :bublylove:" />
                <meta name="keywords" content="Subject Reviews, Ratings, University of Melbourne" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar />
            <div className={styles.main}>
                <Image src="/images/partyblob.gif" alt="PartyBlob. Look at him go" width="50" height="50" />
                <h1>Congratulations! You have found PartyBlob!!</h1>
                <h2>Just look at him go 😍</h2>
                <p>There's nothing other than this here. You might want to go to the Home page.</p>
                <Link href="/">
                        <Button variant="contained">Home</Button>
                    </Link>
            </div>
        </>
    )
}