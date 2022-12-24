import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React from 'react';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, Select, MenuItem, Button } from '@mui/material';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { firebaseConfig } from '../constants/firebase-config';
import { getAuth } from "firebase/auth";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

class ReviewForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any) {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event: any) {
        this.setState({ posted_on: new Date().toLocaleString("en-US", { timeZone: "Australia/Melbourne" }) }, () => {
            push(ref(database, 'reviews/'), this.state);
            alert('A name was submitted: ' + JSON.stringify(this.state));
            event.preventDefault();
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <TextField id="input-subject-name" name="subject_name" label="Subject Name" variant="outlined" onChange={this.handleChange} />
                    <TextField id="input-subject-code" name="subject_code" label="Subject Code" variant="outlined" onChange={this.handleChange} />
                </div>
                <div>
                    <div>
                        <FormLabel id="label-year">The Year you took the Subject</FormLabel>
                        <Select labelId="label" id="select-year" name="year" onChange={this.handleChange}>
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
                    <div>
                        <FormLabel id="label-semester">The Semester you took the Subject</FormLabel>
                        <Select labelId="label" id="select-semester" name="semester" onChange={this.handleChange}>
                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                            <MenuItem value="Summer">Summer</MenuItem>
                            <MenuItem value="Winter">Winter</MenuItem>
                            <MenuItem value="Year Long">Year-Long</MenuItem>
                        </Select>
                    </div>

                </div>
                <TextField id="input-lecturers" label="Lecturer(s)" variant="outlined" name="lecturers" onChange={this.handleChange} />

                <TextField id="input-major" label="Your Major" variant="outlined" name="major" onChange={this.handleChange} />

                <FormLabel id="label-core">Is this a Core Subject for Your Major?</FormLabel>
                <Select labelId="label" id="select-core" name="core" onChange={this.handleChange}>
                    <MenuItem value="Core">Core</MenuItem>
                    <MenuItem value="Elective">Elective</MenuItem>
                    <MenuItem value="Breadth">Breadth</MenuItem>
                </Select>




                <FormLabel id="label-difficulty">Rate the difficulty of the subject on a scale of 1-10</FormLabel>
                <Slider
                    aria-label=""
                    defaultValue={5}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={true}
                    min={1}
                    name="difficulty" onChange={this.handleChange}
                    max={10}
                />
                <FormLabel id="label-teaching-quality">Rate the teaching quality of the subject on a scale of 1-10</FormLabel>
                <Slider
                    aria-label=""
                    defaultValue={5}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={true}
                    name="teaching_quality" onChange={this.handleChange}
                    min={1}
                    max={10}
                />
                <FormLabel id="label-interesting">How interesting is the subject on a scale of 1-10?</FormLabel>
                <Slider
                    aria-label=""
                    defaultValue={5}
                    valueLabelDisplay="auto"
                    step={1}
                    name="interesting" onChange={this.handleChange}
                    marks={true}
                    min={1}
                    max={10}
                />
                <FormLabel id="label-recommend">Would you recommend this subject?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="yes"
                    name="recommended"
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup >

                <TextField id="input-review" label="Review" variant="outlined" name="review" onChange={this.handleChange} />


                <Button variant="contained" type="submit">Submit</Button>

            </form>
        );

    }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>

            </Head>
            <main className={styles.main}>
                <ReviewForm>

                </ReviewForm>
            </main>
        </>
    )
}