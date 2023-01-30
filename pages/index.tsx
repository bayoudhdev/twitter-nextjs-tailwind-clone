import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import News from "../components/news/News";
import {fetchTweets} from "../requests/fetchTweets";
import {Tweet} from "../typings";

interface Props {
    tweets: Tweet[],
}

const Home = ({tweets}: Props) => {
    console.log(tweets);
    return (
        <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
            <Head>
                <title>Twitter</title>
            </Head>
            <main className="grid grid-cols-9">
                <Sidebar/>
                <Feed tweets={tweets}/>
                <News/>
            </main>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    const tweets = await fetchTweets();
    return {
        props: {
            tweets,
        }
    }
}