import TitleBar from '../components/TitleBar';
import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import styles from '../styles/Login.module.css'
import { TextField, Button, Tooltip, IconButton, OutlinedInput, InputAdornment, FormControl, InputLabel, Card,Snackbar,Alert } from '@mui/material';
import { Info, Visibility, VisibilityOff, Google, GitHub, Facebook } from '@mui/icons-material'
import Image from 'next/image'
import { generateName } from '../utils/username-generator'
import { signIn } from "next-auth/react"

function LoginForm({ submitForm }) {
    function handleSubmit(event) {
        event.preventDefault();
        var em = email

        if(em ==""){
            em = `${username}@kitti-subject-reviews-6e32a.web.app`
        }

        signIn("email", { em })
    }

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showRPassword, setShowRPassword] = React.useState(false);
    const handleClickShowRPassword = () => setShowRPassword((show) => !show);

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rPassword, setRPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [successSnackbarOpen, setSuccessSnackbarOpen] = React.useState(false);
    const handleSuccessSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccessSnackbarOpen(false);
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function generatePassword() {
        var length = 12,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }



    function autogenerateEverything() {
        setUsername(generateName())
        const autoPass = generatePassword()
        setPassword(autoPass)
        setRPassword(autoPass)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.horizontal}>

                <div className={styles.form}>
                    <TextField id="input-username" name="username" value={username} label="Username" variant="outlined" onChange={e => setUsername(e.target.value)} />
                    <div>
                        <TextField id="input-email" name="email" label="Email (Optional)" value={email} variant="outlined" onChange={e => setEmail(e.target.value)} />
                        <Tooltip title="Without Email, it would not be possible to recover your account in case you forget your password.">
                            <IconButton>
                                <Info />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Set Password</InputLabel>
                        <OutlinedInput
                            id="input-password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Set Password"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Re-Enter Password</InputLabel>
                        <OutlinedInput
                            id="input-reenter-password"
                            type={showRPassword ? 'text' : 'password'}
                            value={rPassword}
                            name="reenter_password"
                            onChange={e => setRPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowRPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showRPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Re-Enter Password"
                        />
                    </FormControl>

                    <Button variant="contained" type="submit">Submit</Button>


                </div>
                <div>

                    <Card className={styles.card}>
                        <div>
                            <h3>Feeling Lazy?</h3>
                            <Button variant="outlined" onClick={autogenerateEverything}>Autogenerate Everything</Button>
                            <h3>Even More Lazy?</h3>
                            <Button variant="contained" endIcon={<Google />} type="submit">Sign in with Google</Button>
                            <Button variant="contained" endIcon={<Facebook />} type="submit">Sign in with Facebook</Button>
                            <Button variant="contained" endIcon={<GitHub />} type="submit">Sign in with GitHub</Button>
                        </div>
                        <Image src="/images/lazy-cat.png" alt="Lazy Cat" width="100" height="100" />
                    </Card>


                </div>
                <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={handleSuccessSnackbarClose}>
                    <Alert onClose={handleSuccessSnackbarClose} severity="success" sx={{ width: '100%' }}>
                        Account Created Successfully
                    </Alert>
                </Snackbar>

            </form>
        </>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Log In to Kitti Subject Reviews | UniMelb</title>
                <meta name="description" content="New Users Sign Up to Post Reviews and Comments on Kitti Subject Reviews and Ratings for The University of Melbourne" />
                <meta name="keywords" content="Sign Up, Kitti Subject Reviews, University of Melbourne" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <div className={styles.main}>
                <h1>Welcome to Kitti Subject Reviews!</h1>
                <p>Existing User? <Link href="/sign-up">Log In</Link></p>
                <div>
                    <LoginForm></LoginForm>

                </div>

            </div>
        </>
    )
}