import React, {useContext} from "react";
import {SelectedElement} from "../utils/context";
import ElementSetup from "../components/ElementSetup/ElementSetup";
import PageSetup from "../components/PageSetup/PageSetup";

const EditBoardContainer = () => {
    const {selectedElement} = useContext<any>(SelectedElement)


    return (
        <>
            {selectedElement ? <ElementSetup /> : <PageSetup />}
        </>
    )
}

export default EditBoardContainer;