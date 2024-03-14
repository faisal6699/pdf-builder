import React, {useContext, useEffect, useReducer, useRef, useState} from "react";
import MoveComponent from "../components/MoveComponent/MoveComponent";
import {DraggedElement, SelectedElement} from "../utils/context";
import pdfStructureReducer from "../utils/pdfStructureReducer";
import {initialPdfStructure} from "../utils/initialPdfStructure";

const WorkSpaceContainer = () => {

    const [pdfStructure, dispatch] = useReducer(pdfStructureReducer, initialPdfStructure);
    const {draggingElement, updateDraggingElement} = useContext<any>(DraggedElement)
    const {selectedElement, updateSelectedElement} = useContext<any>(SelectedElement)
    const elementRef = useRef<any>(null)



    function changeBackground(e: any) {
        e.target.style.border = "3px solid #c0c0c0"
    }

    function removeBackground(e: any) {
        e.target.style.border = "1px solid #c0c0c0"
    }

    function handleAddInPdf(innerText: string) {
        dispatch({
            type: 'added',
            text: innerText
        })
    }

    function onElementSelect(e: any) {
        e.stopPropagation()
        updateSelectedElement(e.target);
    }

    function onDrop(e: any) {
        console.log(draggingElement)
        // if(draggingElement === 'text') {
        //     const postNode = document.createElement("p");
        //     postNode.onclick = (e) => onElementSelect(e)
        //     postNode.innerText = "para";
        //     postNode.style.width = '100px'
        //     postNode.style.height = '100px'
        //     postNode.style.display = 'flex'
        //     postNode.style.alignItems = 'center'
        //     postNode.style.justifyContent = 'center'
        //     elementRef.current.appendChild(postNode)
        //     // setDraggingElement(null)
        //     setSelectedElement(postNode);
        //     handleAddInPdf(postNode.innerText)
        // }

        // e.target.appendChild(document.getElementById(data));
    }

    function allowDrop(e: any) {
        e.preventDefault()
    }


    return(
        <>
            <div
                className={'bg-white rounded border-gray border-4 my-3 cursor-pointer'}
                style={{width: '620px', height: '877px'}}
                onDragEnter={(e) => changeBackground(e)}
                onDragLeave={e => removeBackground(e)}
                onDrop={(e) => onDrop(e)}
                onDragOver={(e) => allowDrop(e)}
                ref={elementRef}>
            </div>
            <MoveComponent targetRef={selectedElement}/>
        </>

    )
}

export default WorkSpaceContainer;