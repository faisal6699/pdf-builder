import React, {useState} from "react";
import TextElement from "../components/TextElement/TextElement";

interface Props {
    onSelectedElement: () => any
}

const ElementsContainer: React.FC<Props> = ({onSelectedElement}) => {
    const [element, setElement] = useState('')
    return(
        <div className={'p-4 m-8 rounded bg-gray-600 h-5/6'}>
            <header className={'text-center text-2xl shadow-white-200 rounded shadow-md p-2'}>Elements</header>
            <TextElement onSelectElement={onSelectedElement}/>
        </div>
    )
}

export default ElementsContainer;