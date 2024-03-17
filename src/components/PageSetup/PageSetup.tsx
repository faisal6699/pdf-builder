import React, {useReducer} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import pdfStructureReducer from "../../utils/pdfStructureReducer";
import {initialPdfStructure} from "../../utils/initialPdfStructure";

export default function PageSetup() {
    const initialValues = {
        pageSize: 'A4',
        orientation: 'portrait',
        pageMarginTop: 10,
        pageMarginRight: 10,
        pageMarginBottom: 10,
        pageMarginLeft: 10
    };

    const [pdfStructure, dispatch] = useReducer(pdfStructureReducer, initialPdfStructure);

    const validate = (values: any) => {
        const errors = {};
        // You can add validation rules here if needed
        return errors;
    };

    const handleSave = (values: any) => {
        console.log('Form Values:', values);
        dispatch({
            type: 'update page setup',
            text: values
        })
        // Perform saving or further processing here
    };
    return(
        <div className="bg-gray-200 m-3 p-4 flex justify-center flex-col">
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Page Setup</h2>
            </div>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    handleSave(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="pageSize" className="block text-sm font-medium text-gray-700">Page Size:</label>
                            <Field as="select" id="pageSize" name="pageSize" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                {['4A0', '2A0', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'].map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </Field>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="orientation" className="block text-sm font-medium text-gray-700">Page Orientation:</label>
                            <Field as="select" id="orientation" name="orientation" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="portrait">Portrait</option>
                                <option value="landscape">Landscape</option>
                            </Field>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Page Margins:</label>
                            <div className="flex">
                                {['Top', 'Right', 'Bottom', 'Left'].map((label, index) => (
                                    <div key={index} className="flex-grow mr-4">
                                        <label htmlFor={`pageMargin${label}`} className="block text-xs font-medium text-gray-700">{label}:</label>
                                        <Field type="number" id={`pageMargin${label}`} name={`pageMargin${label}`} min="0" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit" disabled={isSubmitting || !isValid} className="px-4 text-center w-full py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}