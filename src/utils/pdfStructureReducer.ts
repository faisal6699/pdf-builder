export default function pdfStructureReducer(prevStructure: any, action: any) {
    switch (action.type) {
        case 'added': {
            const content = [...prevStructure.content, {
                text: action.text,
                style: 'header'
            }]
            prevStructure.content = content;
            return prevStructure

        }
        case 'update page setup': {
            prevStructure.pageSize = action.text.pageSize
            prevStructure.orientation = action.text.orientation
            prevStructure.pageMargins = [
                action.text.pageMarginTop,
                action.text.pageMarginRight,
                action.text.pageMarginBottom,
                action.text.pageMarginLeft
            ]
            console.log(prevStructure)
            return prevStructure;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}