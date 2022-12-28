import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/AddReview.module.css'
import React, { useState } from 'react';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, Select, MenuItem, Button } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { firebaseConfig } from '../constants/firebase-config';
import { getAuth, onAuthStateChanged, signInAnonymously, User } from "firebase/auth";
import TitleBar from '../components/TitleBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Router from 'next/router';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

function ReviewForm({ submitForm }) {
    const [formData, setFormData] = useState({});

    function handleChange(event) {
        const { value, name } = event.target
        formData[name] = value
        setFormData(formData)
    }

    function handleSubmit(event) {
        event.preventDefault();
        submitForm(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.horizontal_split}>
                    <TextField id="input-subject-name" name="subject_name" label="Subject Name" variant="outlined" onChange={handleChange} />
                    <TextField id="input-subject-code" name="subject_code" label="Subject Code" variant="outlined" onChange={handleChange} />
                </div>
                <div className={styles.horizontal_split}>
                    <div className={styles.vertical}>
                        <FormLabel id="label-year">The Year you took the Subject</FormLabel>
                        <Select labelId="label" id="select-year" name="year" onChange={handleChange}>
                            <MenuItem value="2023">2023</MenuItem>
                            <MenuItem value="2022">2022</MenuItem>
                            <MenuItem value="2021">2021</MenuItem>
                            <MenuItem value="2020">2020</MenuItem>
                            <MenuItem value="2019">2019</MenuItem>
                            <MenuItem value="2018">2018</MenuItem>
                            <MenuItem value="2017">2017</MenuItem>
                            <MenuItem value="earlier">2016 and Earlier (Good old times)</MenuItem>
                        </Select>
                    </div>
                    <div className={styles.vertical}>
                        <FormLabel id="label-semester">The Semester you took the Subject</FormLabel>
                        <Select labelId="label" id="select-semester" name="semester" onChange={handleChange}>
                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                            <MenuItem value="Summer">Summer</MenuItem>
                            <MenuItem value="Winter">Winter</MenuItem>
                            <MenuItem value="Year Long">Year-Long</MenuItem>
                        </Select>
                    </div>

                </div>
                <TextField id="input-lecturers" label="Lecturer(s)" variant="outlined" name="lecturers" onChange={handleChange} />

                <TextField id="input-major" label="Your Major" variant="outlined" name="major" onChange={handleChange} />
                <div className={styles.vertical}>
                    <FormLabel id="label-core">Is this a Core Subject for Your Major?</FormLabel>
                    <Select labelId="label" id="select-core" name="core" onChange={handleChange}>
                        <MenuItem value="Core">Core</MenuItem>
                        <MenuItem value="Elective">Elective</MenuItem>
                        <MenuItem value="Breadth">Breadth</MenuItem>
                    </Select>
                </div>

                <div className={styles.vertical}>
                    <FormLabel id="label-difficulty">Rate the difficulty of the subject on a scale of 1-10</FormLabel>
                    <Slider
                        aria-label=""
                        defaultValue={5}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={true}
                        min={1}
                        name="difficulty" onChange={handleChange}
                        max={10}
                    />
                </div>
                <div className={styles.vertical}>
                    <FormLabel id="label-teaching-quality">Rate the teaching quality of the subject on a scale of 1-10</FormLabel>
                    <Slider
                        aria-label=""
                        defaultValue={5}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={true}
                        name="teaching_quality" onChange={handleChange}
                        min={1}
                        max={10}
                    />
                </div>
                <div className={styles.vertical}>
                    <FormLabel id="label-interesting">How interesting is the subject on a scale of 1-10?</FormLabel>
                    <Slider
                        aria-label=""
                        defaultValue={5}
                        valueLabelDisplay="auto"
                        step={1}
                        name="interesting" onChange={handleChange}
                        marks={true}
                        min={1}
                        max={10}
                    />
                </div>
                <div className={styles.vertical}>
                    <FormLabel id="label-recommend">Would you recommend this subject?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        name="recommended"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup >
                </div>


                <TextField id="input-review" multiline
                    rows={4} label="Review" variant="outlined" name="review" onChange={handleChange} />


                <Button variant="contained" type="submit">Submit</Button>

            </form>
        </>
    );
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [user, setUser] = useState();

    onAuthStateChanged(auth, (u) => {
        if (u) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = u.uid;
            setUser(u)
            console.log(u)
            // ...
        } else {
            setUser(undefined)
        }
    });

    function submitForm(state) {
        state.posted_on = new Date().toLocaleString("en-US", { timeZone: "Australia/Melbourne" })
        state.uid = user.uid
        push(ref(database, 'reviews/'), state);
        Router.push('/thank-you')
    }

    function signIn() {
        signInAnonymously(auth)
            .then(() => {

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }
    return (
        <>
            <Head>
                <title>Post a Subject Review on Kitti Subject Reviews | University of Melbourne</title>
                <meta name="description" content="Help your peers by sharing your experiences with Subjects at The University of Melbourne Australia. Help people make intelligent choices." />
                <meta name="keywords" content="Post Subject Reviews, Ratings, University of Melbourne, Unimelb" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <main className={styles.main}>
                {
                    user == undefined &&
                    <Card className={styles.card}>
                        <div>
                            <CardContent>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Hold Up!
                                </Typography>
                                <Typography variant="h5" component="div" sx={{ fontSize: 16 }}>
                                    You need to Sign In to Post a Review
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button onClick={signIn} size="small">Sign In Anonymously</Button>
                            </CardActions>
                        </div>

                        <Image src="/images/cat-hello.png" alt="Cat says Hello" width="100" height="100" />

                    </Card>
                }


                <ReviewForm submitForm={submitForm}>

                </ReviewForm>
            </main>
        </>
    )
}