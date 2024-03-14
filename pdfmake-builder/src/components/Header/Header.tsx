import React, {useReducer} from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfStructureReducer from "../../utils/pdfStructureReducer";
import {initialPdfStructure} from "../../utils/initialPdfStructure";

const Header = () => {
    const [pdfStructure] = useReducer(pdfStructureReducer, initialPdfStructure);

    function generateCode() {
        console.log(pdfStructure)
    }

    function generatePdf() {
        const pdfDocGenerator = pdfMake.createPdf(pdfStructure);
        pdfDocGenerator.open()
    }

    return(
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-end p-2 lg:px-8" aria-label="Global">
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => generateCode()}>Code</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => generatePdf()}>Generate PDF</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;