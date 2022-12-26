import React from "react";
import { Button } from "@mui/material";
import Link from 'next/link'
import { initializeApp } from "firebase/app";
import styles from '../styles/TitleBar.module.css'
import { firebaseConfig } from '../constants/firebase-config';
import { getAuth, signOut } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class TitleBar extends React.Component {
    logout(event: any) {
        console.log("Logging Out")
        signOut(auth).then(() => {
            console.log("Signed Out")
        }).catch((error) => {
            console.log(error)
        });
    }

    
    render() {
        
        return (
            <div className={styles.backdrop}>
                <h2>KITTI SUBJECT REVIEWS</h2>
                <div className={styles.buttons}>
                    <Button size="small" onClick={this.logout}>
                        Sign Out
                    </Button>
                    <Link href="/add-review">
                        <Button variant="contained">Add Review</Button>
                    </Link>
                </div>

            </div>
        )
    }
}