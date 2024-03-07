import React, {useRef} from "react";
import Moveable, {OnDrag, OnResize, OnScale} from "react-moveable";
import MoveComponent from "../components/MoveComponent/MoveComponent";
interface Props {
    element: string;
}
const WorkSpaceContainer: React.FC<Props> = ({element}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    return(
        <div className={'bg-zinc-700 h-screen p-8'}>
            <div className={'bg-white h-full p-4 rounded'}>
                { element === 'text' &&
                    <div className={'target'} ref={targetRef} style={{
                    maxWidth: "auto",
                    maxHeight: "auto",
                    minWidth: "auto",
                    minHeight: "auto",
                }}>text</div>}

                <MoveComponent targetRef={targetRef} />

            </div>
        </div>
    )
}

export default WorkSpaceContainer;