import React, {RefObject} from "react";
import {CiText} from "react-icons/ci";

interface Props {
    onSelectElement: () => any
}

const TextElement: React.FC<Props> = ({onSelectElement}) => {
    return (
        <div onClick={onSelectElement} className={'cursor-pointer flex w-1/2 justify-center flex-col items-center shadow-md shadow-white-500 mt-2 p-4'}>
            <CiText className={'font-bold text-4xl'}/>
            <span>Text</span>
        </div>
    )
}

export default TextElement;