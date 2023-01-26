import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material'
import Head from 'next/head'
import TitleBar from '../../components/TitleBar';
import styles from "../../styles/Subject.module.css"
import { SubjectRow } from '../../components/SubjectRow';


export default function Home() {
    const [searchValue, setSearchValue] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        search()
    };

    async function search() {
        if (searchValue.length < 3) {
            setSearchResults([])
            return;
        }
        fetch(`/api/search-subjects?q=${searchValue}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data)
            });
    }
    return (
        <>
            <Head>
                <title>Kitti Subject Reviews | University of Melbourne</title>
                <meta name="description" content="Authentic Reviews for Subjects offered at UniMelb Australia so you can make an informed choice. Supported by CS@UniMelb, this is a student to student effort." />
                <meta name="keywords" content="Subject Reviews, Ratings, University of Melbourne, Unimelb" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <main className={styles.main}>
                <TextField
                    id="search"
                    label="Search"
                    variant="outlined"
                    value={searchValue}
                    onChange={handleSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
                <ul>
                    {
                        searchResults.map((review) =>
                            <SubjectRow subject={review} />
                        )
                    }
                </ul>
            </main>

        </>
    )
}