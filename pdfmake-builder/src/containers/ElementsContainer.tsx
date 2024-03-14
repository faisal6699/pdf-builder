import React, {useContext, useState} from "react";
import {listOfElements} from "../utils/listOfElements";
import {CiImageOn, CiText, CiViewList} from "react-icons/ci";
import {FaTable} from "react-icons/fa";
import {SelectedElement} from "../utils/context";

const ElementsContainer = () => {
    const {selectedElement, updateSelectedElement} = useContext<any>(SelectedElement)

    function dragStart(item: any) {
        console.log(item)
        if(item) {
            updateSelectedElement(item)
        }

    }

    return(
            <div className={''}>
                <header className={'text-center mt-3'}>Elements</header>
                {listOfElements.map((item, index) => {
                    return (
                    <div
                        key={index}
                        draggable
                        onDragStart={() => dragStart(item)}
                        className={'flex justify-center mt-3 cursor-pointer'}>
                        <span className={'border-2 p-2'}>
                            {item === 'text' && <CiText className={'font-bold text-2xl '}/>}
                            {item === 'list' && <CiViewList className={'font-bold text-2xl '}/>}
                            {item === 'table' && <FaTable className={'font-bold text-2xl '}/>}
                            {item === 'image' && <CiImageOn className={'font-bold text-2xl '}/>}
                        </span>
                    </div>
                    )
                })}
            </div>
    )
}

export default ElementsContainer;