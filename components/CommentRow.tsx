import { Response } from "@prisma/client";
import React from "react";
import styles from '../styles/ReviewRow.module.css'

interface ReponseProps {
    comment: Response,
}

export class CommentRow extends React.Component<ReponseProps> {
    comment: Response;
    constructor(props: any) {
        super(props);
        this.comment = props.comment;
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.horizontal}>
                    <h3 className={styles.subject_name}>{this.comment.author_id}</h3>
                    <h4 className={styles.subject_code}>{this.comment.content}</h4>
                </div>
            </div>
        );
    }
}