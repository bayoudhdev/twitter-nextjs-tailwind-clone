import {PhotographIcon} from "@heroicons/react/outline";
import {SVGProps} from "react";

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export const IconButton = ({Icon}: Props) => {
    return (
        <div className="p-2 cursor-pointer rounded-full transition-transform duration-150 ease-out hover:bg-light_twitter">
            <Icon className="h-5 w-5"/>
        </div>
    );
}