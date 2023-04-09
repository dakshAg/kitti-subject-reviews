import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client'
import { Subject, Review } from "@prisma/client";
import { GetStaticProps, GetStaticPaths, } from 'next';
import { Component } from 'react';
import TitleBar from '../../components/TitleBar';
import Head from 'next/head'
import Image from 'next/image'
import { ReviewRow } from '../../components/HomeReviewRow';

const prisma = new PrismaClient()

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const code = params?.code

    const subject = await prisma.subject.findFirst({
        where: {
            code: code as string
        }
    })
    const reviews  = await prisma.review.findMany({
        where:{
            subject_code: code as string
        },  
        include:{
            responses: true
        }
    })
    console.log(subject)
    return {
        props: {
            subject: JSON.parse(JSON.stringify(subject)),
            reviews: JSON.parse(JSON.stringify(reviews)),
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const subjects = prisma.subject.findMany({});
    const paths = (await subjects).map((subject) => ({
        params: { code: subject.code }
    }))
    return { paths, fallback: false }
}

export default function subjectPage({ subject, reviews }: { subject: Subject, reviews: Review[] }) {
    return (
        <>
            <Head>
                <title>{subject.name} Reviews on Kitti | University of Melbourne</title>
                <meta name="description" content="Help your peers by sharing your experiences with Subjects at The University of Melbourne Australia. Help people make intelligent choices." />
                <meta name="keywords" content="Post Subject Reviews, Ratings, University of Melbourne, Unimelb" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TitleBar></TitleBar>
            <main>
                <div>
                    <Image src="/images/cat-hello.png" width="100" height="100" alt="Cat says Hello">

                    </Image>
                    <h1>{subject.name}</h1>
                    <h2>{subject.code}</h2>

                    <h5>Availability</h5>
                    {
                        subject.sems.map((sem) =>
                            <p>{sem}</p>
                        )
                    }

                    <h5>Campus</h5>
                    {subject.campus}

                </div>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        {
                            reviews.map((review)=>
                                <ReviewRow review={review}></ReviewRow>
                            )
                        }
                    </div>
                </div>
            </main>

        </>
    )
}
