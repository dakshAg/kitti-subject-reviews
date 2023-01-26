import styles from '../styles/Home.module.css'
import { Button, Card } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'
import TitleBar from '../components/TitleBar';
import { Footer } from '../components/Footer';
import Head from 'next/head'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../constants/firebase-config';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

export default function Home() {
    return (
        <>
            <Head>
                <title>Kitti Subject Reviews | University of Melbourne</title>
                <meta name="description" content="Authentic Reviews for Subjects offered at UniMelb Australia so you can make an informed choice. Supported by CS@UniMelb, this is a student to student effort." />
                <meta name="keywords" content="Subject Reviews, Ratings, University of Melbourne, Unimelb" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                <div >
                    <h2>How we're doing</h2>
                    <div className={styles.realms}>
                        <div>
                            <h3></h3>
                            <p>Reviews</p>
                        </div>
                        <div>
                            <h3></h3>
                            <p>Users</p>
                        </div>
                        <div>
                            <h3></h3>
                            <p>Subjects Reviewed</p>
                        </div>
                    </div>
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
                <div className={styles.realms}>
                    <Image src="/images/recommendations.svg" alt="Students happy after Receiving Subject Reviews from Kitti" width="200" height="200" />
                    <div>
                        <h2>Disclaimer</h2>
                        <p>Kitti Subject Reviews is an open platform for posting subject reviews, and the reviews do not reflect the opinions of creators and maintainers of this website. We have no affiliation with the University of Melbourne, and this is a not-for-profit student run website. While we actively try to remove unsuitable content of all sorts from the website, there may be some unsuitable content posted. You are requested to report such content so it can be timely removed from the platform. Thank you for your support. Enjoy the Reviews!</p>
                        <Link href="/add-review">
                            <Button variant="contained">
                                Get in touch
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.center}>
                    <h2>We need your Support</h2>
                    <p>This is a broke student run website. Every bit of your support will help this site grow and help more people.</p>
                    <div className={styles.realms}>
                        <div>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Boost our Discord Server</h3>
                                    <p>Better Communication is a key to Organisation growth. Help us communicate better and grow faster by boosting our server. It feels a bit empty without kannapog.</p>
                                    <Button variant="outlined">
                                        Discord
                                    </Button>
                                </div>
                                <Image src="/images/boost.webp" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="150" />

                            </Card>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Buy us a Domain</h3>
                                    <p>https://kitti-subject-reviews-6e32a.web.app/ doesn't look very professional, but this is the best we could get for free. We'd really appreciate a cool domain to host our site on.</p>
                                </div>
                                <Image src="/images/website.png" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="150" />

                            </Card>

                        </div>
                        <div>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Contribute</h3>
                                    <p>Have a cool idea for this website? Or have some awesome skills you wanna flex? Need an amazing project on your Resume or CV? Hop on to GitHub and contriute to Kitti Subject Reviews in whatever way you can.</p>
                                    <Button variant="outlined">
                                        GitHub
                                    </Button>
                                </div>
                                <Image src="/images/contribute.png" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="150" />

                            </Card>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Give Feedback</h3>
                                    <p>We'd love to hear from you! Provide any feedback or suggestions on our Discord. We really appreciate it and will try to work on your suggestions asap.</p>
                                </div>
                                <Image src="/images/feedback.png" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="100" />

                            </Card>
                        </div>
                        <div>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Spread the Word</h3>
                                    <p>More Users, More happiness. Share the website with your friends to give us more users and more reviews.</p>
                                </div>
                                <Image src="/images/share.png" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="150" />

                            </Card>
                            <Card className={styles.card}>
                                <div className={styles.support_realm}>
                                    <h3>Post Reviews!</h3>
                                    <p>Post reviews for all subjects you have taken at University. More reviews help your peers make wise decisions and being able to make a difference motivates us to work harder.</p>
                                    <Button variant="outlined">
                                        Post Review
                                    </Button>
                                </div>
                                <Image src="/images/post-review.png" alt="Students happy after Receiving Subject Reviews from Kitti" width="150" height="150" />

                            </Card>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
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