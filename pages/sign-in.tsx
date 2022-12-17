import { Button } from "@mui/material"
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../constants/firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
    function signIn() {
        signInAnonymously(auth)
            .then(() => {
               window.open("/add-review")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }

    return (
        <>
            <Button onClick={signIn}>
                Sign In Anonymusly
            </Button>
        </>
    )
}