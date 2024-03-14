import React, {useContext, useRef} from "react";
import MoveComponent from "../MoveComponent/MoveComponent";
import {SelectedElement} from "../../utils/context";

const WorkSpace = (props: any) => {
    const { element } = useContext<any>(SelectedElement);
    const targetRef = useRef<any>(null);

    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
            style={{flex: 1, padding: '20px', border: '2px solid #aaa', textAlign: "center"}} className={'bg-white h-full rounded border-gray border-4 my-3'}>
                <div className={'element-wrapper'} style={{}}>
                    {element.name === 'text' && <div ref={targetRef}>text</div>}
                    {element.name === 'list' && <div ref={targetRef}>list</div>}
                    {element.name === 'table' && <div ref={targetRef}>table</div>}
                    {element.name === 'image' && <div ref={targetRef}>image</div>}

                </div>
            <MoveComponent targetRef={targetRef} />
        </div>
    )
}

export default WorkSpace;