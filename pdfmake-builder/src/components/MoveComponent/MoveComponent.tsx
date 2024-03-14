import React, {ElementRef, RefObject} from "react";
import Moveable, {OnDrag, OnResize, OnScale} from "react-moveable";
import {flushSync} from "react-dom";

interface Props {
 targetRef: RefObject<HTMLElement>;
}


const MoveComponent: React.FC<Props> = ({targetRef}) => {

    console.log(targetRef)
 return(
     <Moveable
         target={targetRef}
         draggable={true}
         resizable={true}
         throttleDrag={1}
         edgeDraggable={false}
         startDragRotate={1}
         throttleDragRotate={1}
         throttleResize={1}
         onDrag={e => {
          console.log(e)
          e.target.style.transform = e.transform
         }}
         renderDirections={["nw","n","ne","w","e","sw","s","se"]}
         onResize={e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
         }}
     />
 )
}

export default MoveComponent;