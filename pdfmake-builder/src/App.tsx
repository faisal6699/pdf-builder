import React, { useState} from 'react';
import './App.css';
import EditBoardContainer from "./containers/EditBoardContainer";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Header from "./components/Header/Header";
import WorkSpaceContainer from "./containers/WorkSpaceContainer";
import {SelectedElement} from "./utils/context";
import ElementsContainer from "./containers/ElementsContainer";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function App() {
    const [draggingElement, setDraggingElement] = useState<any>(null);
    const [selectedElement, setSelectedElement] = useState<any>(null);

    const updateDraggingElement = (value: any) => {
        setDraggingElement(value)
    }

    const updateSelectedElement = (value: any) => {
        setSelectedElement(value)
    }
    return (
        <div className={'box-border w-full h-screen'}>
                <Header />
                <SelectedElement.Provider value={{draggingElement, updateDraggingElement, selectedElement, updateSelectedElement}}>
                    <div className={'grid grid-cols-9 h-5/6'}>
                        <div>
                            <ElementsContainer />
                        </div>
                        <div className={'col-span-5 flex justify-center'}>
                            <WorkSpaceContainer />
                        </div>
                        <div className={'col-span-3 h-full'}>
                            <EditBoardContainer />
                        </div>
                    </div>
                </SelectedElement.Provider>
        </div>
    );
}

export default App;
