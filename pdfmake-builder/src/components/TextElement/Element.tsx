import React, {RefObject, useContext} from "react";
import {CiImageOn, CiText, CiViewList} from "react-icons/ci";
import {SelectedElement} from "../../utils/context";
import {FaTable} from "react-icons/fa";
 interface Props {
     value: string
 }

const Element = ({value}: Props) => {
    const {element, setElement} = useContext<any>(SelectedElement)

    return (
        <div
            draggable
            onDragStart={() => setElement({name: value, index: (element.index ?? 0) + 1})}
            onDrop={() => setElement({name: '', index: 0})}
            className={'flex justify-center mt-3 cursor-pointer'}>
            <span className={'border-2 p-2'}>
                {value === 'text' && <CiText className={'font-bold text-2xl '}/>}
                {value === 'list' && <CiViewList className={'font-bold text-2xl '}/>}
                {value === 'table' && <FaTable className={'font-bold text-2xl '}/>}
                {value === 'image' && <CiImageOn className={'font-bold text-2xl '}/>}
            </span>

        </div>
    )
}

export default Element;