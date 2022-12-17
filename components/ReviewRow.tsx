import React from "react";
import styles from '../styles/ReviewRow.module.css'

export class ReviewRow extends React.Component {
    review: any;
    constructor(props: any) {
        super(props);
        this.review = props.review;
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.horizontal}>
                    <h3>{this.review.subject_name}</h3>
                    <h4 className={styles.subject_code}>{this.review.subject_code}</h4>
                    <p className={styles.sem}>{this.review.semester}, {this.review.year}</p>
                </div>
                <p>{this.review.core} for {this.review.major}</p>
                <p>Lecturer(s): {this.review.lecturers}</p>
                <div className={styles.horizontal}>
                    <div className={styles.cozyBox}>
                        <h5>{this.review.difficulty}/10</h5>
                        <p>Difficulty</p>
                    </div>
                    <div className={styles.cozyBox}>
                        <h5>{this.review.interesting}/10</h5>
                        <p>Interesting</p>
                    </div>
                    <div className={styles.cozyBox}>
                        <h5>{this.review.teaching_quality}/10</h5>
                        <p>Teaching Quality</p>
                    </div>
                </div>
                {this.review.review}
            </div>
        );
    }
}