import Image from "next/image";
import TimeAgo from "react-timeago";
import {Comment} from "../../typings";

interface Props {
    comments: Comment[]
}

export const FeedComments = ({comments}: Props) => {
    return (<div>
        {comments?.length > 0 && (
            <div className="my-2 mt-5 max-h-44 space-y-4 overflow-y-scroll border-t border-gray-100 p-5">
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
    </div>)
}