import {SearchIcon} from "@heroicons/react/outline";
import TweetEmbed from "react-tweet-embed";

const Widgets = () => {
    return (<div className="col-span-2 mt-4 hidden px-2 lg:inline">
        {/** SearchBox **/}
        <div className="flex items-center space-x-2 bg-gray-100 p-3
        rounded-full">
            <SearchIcon className="h-5 w-5 text-gray-400"/>
            <input type="text"
                   placeholder='Search Twitter'
                   className="flex-1 outline-none bg-transparent"
            />
        </div>
        <TweetEmbed
            className="mr-5"
            tweetId="3290719465"
            options={{ height: 400}}/>
        {/** SearchBox **/}
        {/** SearchBox **/}
    </div>);
}

export default Widgets;