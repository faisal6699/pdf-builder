import React, {useContext, useReducer, useRef, useState} from 'react';
import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Header from "./components/Header/Header";
import {listOfElements} from "./utils/listOfElements";
import {CiImageOn, CiText, CiViewList} from "react-icons/ci";
import {FaTable} from "react-icons/fa";
import MoveComponent from "./components/MoveComponent/MoveComponent";
import pdfStructureReducer from "./utils/pdfStructureReducer";
import {initialPdfStructure} from "./utils/initialPdfStructure";
import PageSetup from "./components/PageSetup/PageSetup";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


function App() {
    const [draggingElement, setDraggingElement] = useState<any>(null);
    const [selectedElement, setSelectedElement] = useState<any>(null);
    const [pdfStructure, dispatch] = useReducer(pdfStructureReducer, initialPdfStructure);
    const elementRef = useRef<any>(null)

    const contextProvider = {
        draggingElement: '',
        selectedElement: ''
    }

    function dragStart(item: any) {
        if (item) {
            setDraggingElement(item)
        }

    }

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
        setSelectedElement(e.target);
    }

    function onDrop(e: any) {
        console.log(draggingElement)
        if (draggingElement === 'text') {
            const postNode = document.createElement("p");
            postNode.onclick = (e) => onElementSelect(e)
            postNode.innerText = "para";
            postNode.style.width = '100px'
            postNode.style.height = '100px'
            postNode.style.display = 'flex'
            postNode.style.alignItems = 'center'
            postNode.style.justifyContent = 'center'
            elementRef.current.appendChild(postNode)
            // setDraggingElement(null)
            setSelectedElement(postNode);
            handleAddInPdf(postNode.innerText)
        }
    }

    function allowDrop(e: any) {
        e.preventDefault()
    }

    return (
        <div className={'box-border w-full h-screen'}>
            <Header/>
            <div className={'grid grid-cols-9 h-5/6'}>
                <div>
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
                </div>
                <div className={'col-span-5 flex justify-center'}>
                    <div>
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
                    </div>
                </div>
                <div className={'col-span-3 h-full'}>
                    < PageSetup/>
                </div>
            </div>
        </div>
    );
}

export default App;
