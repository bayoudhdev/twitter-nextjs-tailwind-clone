import {RefreshIcon} from "@heroicons/react/outline";
import {TweetBox} from "./TweetBox";
import {Tweet} from "../typings";
import {TweetFeed} from "./TweetFeed";
import {FeedHeader} from "./FeedHeader";

interface Props {
    tweets: Tweet[]
}

const Feed = ({tweets}: Props) => {
    return (
        <div className="col-span-7 border-x lg:col-span-5">
            <FeedHeader/>
            <TweetBox/>
            <TweetFeed/>
        </div>
    );
}

export default Feed;