import {RefreshIcon} from "@heroicons/react/outline";
import {FeedPostTweet} from "./FeedPostTweet";
import {Tweet} from "../../typings";
import {FeedTweetList} from "./FeedTweetList";
import {FeedHeader} from "./FeedHeader";

interface Props {
    tweets: Tweet[]
}

const Feed = ({tweets}: Props) => {
    return (
        <div className="col-span-7 border-x max-h-screen lg:col-span-5 overflow-y-scroll">
            <FeedHeader/>
            <FeedPostTweet/>
            <FeedTweetList tweets={tweets}/>
        </div>
    );
}

export default Feed;