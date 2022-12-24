import React from "react";
import { Button } from "@mui/material";
import Link from 'next/link'
import styles from '../styles/TitleBar.module.css'

export class TitleBar extends React.Component {
    render() {
        return (
            <div className={styles.backdrop}>
                <h2>KITTI SUBJECT REVIEWS</h2>
                <Link href="/add-review">
                    <Button variant="contained">Add Review</Button>
                </Link>

            </div>
        )
    }
}