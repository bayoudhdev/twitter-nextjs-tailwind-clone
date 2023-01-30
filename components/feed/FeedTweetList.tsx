import {Tweet} from "../../typings";
import {FeedTweet} from "./FeedTweet";

interface Props {
    tweets: Tweet[]
}

export const FeedTweetList = ({tweets}: Props) => {
    return (<div>
        {tweets.map(tweet => <FeedTweet key={tweet._id} tweet={tweet}/>)}
    </div>);
}