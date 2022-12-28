import Head from 'next/head'
import TitleBar from '../components/TitleBar';
import styles from '../styles/ThankYou.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@mui/material";

export default function Home() {
    return (
        <>
            <Head>
                <title>Thank You for Posting a Review</title>
                <meta name="description" content="People who post subject reviews are Kings. We must thank them for their words for they improve the futures of thousands of future students." />
                <meta name="keywords" content="Subject Reviews, Thank You, King, Good People" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar />
            <main className={styles.main}>
                <Image src="/images/catking.png" alt="PartyBlob. Look at him go" width="50" height="50" />
                <h1 className={styles.center_align}>Thank You!</h1>
                <h2 className={styles.center_align}>You King / Queen / Preferred Exalted Title are a Legend</h2>
                <p className={styles.center_align}>Your thorough analysis and insightful commentary will be incredibly helpful to thousands as they consider their options for Unimelb Subjects.

                    We greatly appreciate the time and effort you put into sharing your knowledge and expertise with others. Your review will be an invaluable resource and will help people make a more informed decision.

                    Thank you again for your contribution.</p>
                <Link href="/">
                    <Button variant="contained">Home</Button>
                </Link>
            </main>
        </>
    )
}