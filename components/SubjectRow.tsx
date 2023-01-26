import { Subject } from "@prisma/client";
import React from "react";
import styles from '../styles/ReviewRow.module.css'

export class SubjectRow extends React.Component {
    subject: Subject;
    constructor(props: any) {
        super(props);
        this.subject = props.subject;
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.horizontal}>
                    <h3 className={styles.subject_name}>{this.subject.code}</h3>
                    <h4 className={styles.subject_code}>{this.subject.name}</h4>
                </div>
            </div>
        );
    }
}