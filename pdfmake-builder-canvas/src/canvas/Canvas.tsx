import React, {useEffect, useRef} from "react";

const Canvas = (props: any) => {
    const canvasRef = useRef<any>(null)

    const draw = (ctx: any) => {
        ctx.fillStyle = '#c0c0c0'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2*Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if(canvas) {
            const context = canvas.getContext('2d')
            //Our first draw
            context.fillStyle = '#d0d0d0'
            console.log(context.canvas.width)
            context.fillRect(0, 10, 50, 50)
            draw(context)
        }

    }, [])
    return <canvas ref={canvasRef} {...props} />
}

export default Canvas;