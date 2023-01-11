import React from "react";
import { Card } from '@mui/material';
import styles from '../styles/Badge.module.css'
import Image from 'next/image'

export class Badge extends React.Component {
    review: any;
    constructor(props: any) {
        super(props);
        this.review = props.review;
    }

    render() {
        return (
            <Card className={styles.card}>
                <Image src="/images/badges/reviewer.png" alt="Reviewer" width="30" height="30"></Image>
                <h4>
                    Reviewer
                </h4>
            </Card>
        );
    }
}