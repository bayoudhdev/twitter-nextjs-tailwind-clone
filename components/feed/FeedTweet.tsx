import {Comment, Tweet} from "../../typings";
import Image from "next/image";
import TimeAgo from "react-timeago";
import {ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon} from "@heroicons/react/outline";
import {fetchComments} from "../../requests/fetchComments";
import {useEffect, useState} from "react";

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
            <div>
                <div className="flex items-center space-x-1">
                    <p className="mr-1 font-bold">{tweet.username}</p>
                    <p className="hidden text-sm text-gray-500 sm:inline">
                        @{tweet.username.replace(/\s+/g, '')
                        .toLowerCase().padEnd(tweet.username.length + 1, " •")}</p>
                    <TimeAgo
                        className="text-sm text-gray-500"
                        date={tweet._createdAt}
                    />
                </div>
                <div>
                    <p className="pt-1">{tweet.text}</p>
                    {
                        tweet.image && <Image
                            className="m-5 ml-0 mb-1 rounded-lg max-w-100 max-h-60 object-cover shadow-sm"
                            src={tweet.image}
                            alt="post tweet image"
                            width={450}
                            height={300}
                        />
                    }
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-5">
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <ChatAlt2Icon className="h-5 w-5"/>
                <p>{comments?.length}</p>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <SwitchHorizontalIcon className="h-5 w-5"/>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <HeartIcon className="h-5 w-5"/>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <UploadIcon className="h-5 w-5"/>
            </div>
        </div>
        {comments?.length > 0 && (<div className="my-2 mt-5 max-h-44 space-y-4 overflow-y-scroll border-t border-gray-100 p-5">
            {
                comments.map((comment) => (
                    <div key={comment._id} className="relative flex space-x-2">
                        <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30"/>
                        <Image src={comment.profileImg}
                               className="mt-2 h-7 w-7 rounded-full object-cover"
                               alt="tweet comment image"
                               width={200}
                               height={200}
                        />
                        <div>
                            <div className="flex items-center space-x-1">
                                <p className="mr-1 font-bold">{comment.username}</p>
                                <p className="hidden text-sm text-gray-500 lg:inline">
                                    @{comment.username.replace(/\s+/g, '')
                                    .toLowerCase().padEnd(comment.username.length + 1, " •")}
                                </p>
                                <TimeAgo
                                    className="text-sm text-gray-500"
                                    date={comment._createdAt}
                                />
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>)}
    </div>);
}