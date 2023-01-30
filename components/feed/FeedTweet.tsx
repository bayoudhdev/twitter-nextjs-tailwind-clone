import {Comment, Tweet} from "../../typings";
import Image from "next/image";
import {fetchComments} from "../../requests/fetchComments";
import {useEffect, useState} from "react";
import {FeedComments} from "./FeedComments";
import {FeedActions} from "./FeedActions";
import {FeedTweetItemDetail} from "./FeedTweetItemDetail";

interface Props {
    tweet: Tweet
}

export const FeedTweet = ({tweet}: Props) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const refreshComments = async () => {
        // @ts-ignore
        const comments: Comment[] = await fetchComments(tweet._id);
        setComments(comments);
    }

    useEffect(() => {
        const getComments = async () => {
            await refreshComments();
        };
        getComments().then();
    }, []);

    return (<div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
        <div className="flex space-x-3">
            <Image
                className="h-10 w-10 rounded-full object-cover"
                src={tweet.profileImg}
                alt="tweet image"
                width={100}
                height={100}
            />
            <FeedTweetItemDetail tweet={tweet}/>
        </div>
        <FeedActions comments={comments}/>
        <FeedComments comments={comments}/>
    </div>);
}