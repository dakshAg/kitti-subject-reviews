import TitleBar from '../components/TitleBar';
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../styles/Login.module.css'
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, Select, MenuItem, Button } from '@mui/material';

function LoginForm({ submitForm }) {
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
                <TextField id="input-username-email" name="username_email" label="Username / Email" variant="outlined" onChange={handleChange} />
                <TextField id="input-password" name="password" label="Password" variant="outlined" onChange={handleChange} type="password" autoComplete="current-password"/>
                
                <Button variant="contained" type="submit">Submit</Button>

            </form>
        </>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Log In to Kitti Subject Reviews | UniMelb</title>
                <meta name="description" content="Existing Users Log In to Post Reviews and Comments on Kitti Subject Reviews and Ratings for The University of Melbourne" />
                <meta name="keywords" content=" Log In, Kitti Subject Reviews, University of Melbourne" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <div className={styles.main}>
                <h1>Welcome Back!</h1>
                <p>New User? <Link href="/sign-up">Sign Up</Link></p>
                <LoginForm></LoginForm>
            </div>
        </>
    )
}