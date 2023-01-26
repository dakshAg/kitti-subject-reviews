import React from "react";
import styles from '../styles/ReviewRow.module.css'
import { TextField, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material'

export function ReviewRow(props: any) {
    const [comment, setComment] = React.useState("");

    function handleCommentSubmit(event: any) {
        event.preventDefault();
        submitForm();
    }

    async function submitForm() {
        const response = {
            type: "Comment",
            review: {
                connect: {
                    id: props.review.id
                }
            },
            content: comment,
        }
        await fetch('/api/post-response', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
        });
    }

    return (
        <div className={styles.box}>
            <div className={styles.horizontal}>
                <h3 className={styles.subject_name}>{props.review.subject_name}</h3>
                <h4 className={styles.subject_code}>{props.review.subject_code}</h4>
                <p className={styles.sem}>{props.review.semester}, {props.review.year}</p>
            </div>
            <p className={styles.basics}>{props.review.core} for {props.review.major}</p>
            <p className={styles.basics}>Lecturer(s): {props.review.lecturers}</p>
            <div className={styles.horizontal}>
                <div className={styles.cozyBox}>
                    <h5>{props.review.difficulty}/10</h5>
                    <p>Difficulty</p>
                </div>
                <div className={styles.cozyBox}>
                    <h5>{props.review.interesting}/10</h5>
                    <p>Interesting</p>
                </div>
                <div className={styles.cozyBox}>
                    <h5>{props.review.teaching_quality}/10</h5>
                    <p>Teaching Quality</p>
                </div>
            </div>
            <p className={styles.basics}>{props.review.review}</p>
            <form onSubmit={handleCommentSubmit}>
                <TextField id="input-subject-code" name="comment" label="Write a Comment" variant="outlined" onChange={e => setComment(e.target.value)} />
                <IconButton aria-label="delete" type="submit">
                    <Send />
                </IconButton>
            </form>

        </div>
    )
}