import React from "react";
import { Button } from "@mui/material";
import Link from 'next/link'

export class TitleBar extends React.Component {
    render() {
        return (
            <div>
                <Link href="/add-review">
                    <Button variant="contained">Add Review</Button>
                </Link>

            </div>
        )
    }
}