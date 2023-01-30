import TimeAgo from "react-timeago";
import Image from "next/image";
import {Tweet} from "../../typings";

interface Props {
    tweet: Tweet
}

export const FeedTweetItemDetail = ({tweet}: Props) => {
    return (
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
    );
}