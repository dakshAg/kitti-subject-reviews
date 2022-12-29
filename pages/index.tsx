import styles from '../styles/Home.module.css'
import { Button } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'
import TitleBar from '../components/TitleBar';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
    return (
        <>
            <TitleBar></TitleBar>
            <div className={styles.main}>
                <div className={styles.horizontal}>
                    <div className={styles.geek}>
                        <h1>Kitti Subject Reviews</h1>
                        <h2>For The University of Melbourne</h2>
                        <p>Peer reviews for academic success. Your one-stop resource for honest subject evaluations and helping you navigate the academic landscape with confidence.</p>
                        <div className={styles.buttons}>
                            <Link href="/add-review">
                            <Button variant="contained">
                                Write a Review
                            </Button>
                            </Link>
                           
                            <Link href="/reviews">
                            <Button variant="outlined">
                                Search Reviews
                            </Button>
                            </Link>
                        </div>
                    </div>
                    <div >
                        <Image className={styles.image} src="/images/happy-students.svg" alt="Students happy after Receiving Subject Reviews from Kitti" width="400" height="400" />

                    </div>

                </div>
                <div className={styles.center}>
                    <h2>Experience UniMelb with Confidence, we've got your back.</h2>
                    <p>By reading reviews and evaluations of different subjects, students can make more informed decisions about which courses to take and which majors to pursue. Get the most out of your education and ensure that you are learning from the best instructors.</p>
                </div>
                <div className={styles.realms}>
                    <div className={styles.realm}>
                        <Image src="/images/open-source.svg" alt="Students happy after Receiving Subject Reviews from Kitti" width="200" height="200" />
                        <h3>Open-Source</h3>
                        <p>We're free forever, and the software is here to stay, even after the initial team isn't active. Moreover, everyone can add their own features as we move forward. <Link href="https://github.com/dakshAg/kitti-subject-reviews/" className={styles.link}>Contribute!</Link></p>
                    </div>
                    <div className={styles.realm}>
                        <Image src="/images/handbook-integration.svg" alt="Students happy after Receiving Subject Reviews from Kitti" width="200" height="200" />
                        <h3>Integrated with Handbook</h3>
                        <p>No more juggling between Tabs to research your subject choices. View Handbook details right within the Kitti Subject Review website!</p>
                    </div>
                    <div className={styles.realm}>
                        <Image src="/images/recommendations.svg" alt="Students happy after Receiving Subject Reviews from Kitti" width="200" height="200" />
                        <h3>Recommendations</h3>
                        <p>We aren't stopping at reviews. We'll soon be developing AI powered personalized Subject Recommendations to help you plan your degree. Coming Soon!</p>
                    </div>
                </div>
            </div>
        </>
    )
}