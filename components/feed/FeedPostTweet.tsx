import Image from "next/image";
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'
import {useState} from "react";
import {IconButton} from "../shared/IconButton";

export const FeedTweetBox = () => {
    const [input, setInput] = useState<string>('');

    return (
        <div className="flex space-x-2 items-center p-5">
            <Image
                className="h-14 w-14 object-cover rounded-full mt-4"
                src="https://links.papareact.com/gll"
                alt="twitter user icon"
                width={200}
                height={200}
            />
            <div className="flex flex-1 pl-2 items-center">
                <form className="flex flex-1 flex-col">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="What's Happening ?"
                        className="h-24 w-full outline-none text-xl placeholder:text-xl"/>
                    <div className="flex mr-2 items-center">
                        <div className="flex space-x-0 text-twitter flex-1">
                            <IconButton Icon={PhotographIcon}/>
                            <IconButton Icon={SearchCircleIcon}/>
                            <IconButton Icon={EmojiHappyIcon}/>
                            <IconButton Icon={CalendarIcon}/>
                            <IconButton Icon={LocationMarkerIcon}/>
                        </div>
                        <button
                            disabled={!input}
                            className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40">Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}