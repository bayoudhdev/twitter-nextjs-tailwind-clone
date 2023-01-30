import {ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon} from "@heroicons/react/outline";
import {Comment} from "../../typings";

interface Props {
    comments: Comment[]
}

export const FeedActions = ({comments}: Props) => {
    return (
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
    );
}