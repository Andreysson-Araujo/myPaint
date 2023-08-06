//variaveis
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const inputColor = document.querySelector(".input_color")
const tools = document.querySelectorAll(".button_tool")
const sizeButton = document.querySelector(".button_size")
const buttonClear = document.querySelector(".button_clear")

let brushSize=20


let isPainting = false

let activeTool = "brush"

//escolha a cor

inputColor.addEventListener("change", ({target}) => {
    ctx.fillStyle = target.value
})

//evento para desenha com mouse
canvas.addEventListener("mousedown", ({clientX, clientY}) => {
    isPainting = true
    if (activeTool == "brush") {
        draw(clientX, clientY)
    }
})

canvas.addEventListener("mousemove", ({clientX, clientY}) => {
    if(isPainting) {
        if (activeTool == "brush") {
            draw(clientX, clientY)
        }
        if(activeTool == "rubber"){
            erase(clientX, clientY)
        }
        
    }
})

canvas.addEventListener("mouseup", ({clientX, clientY}) => {
    isPainting = false
})


const draw = (x, y) => {
    ctx.globalCompositeOperation = "source-over"
    ctx.beginPath()
    ctx.arc(x - canvas.offsetLeft, y- canvas.offsetTop, brushSize / 2, 0, 2 * Math.PI)
    ctx.fill()
}

const erase = (x, y) => {
    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x - canvas.offsetLeft, y- canvas.offsetTop, brushSize / 2, 0, 2 * Math.PI)
    ctx.fill()
}

const selectTool = ({target}) => {
    const selectTool = target.closest("button")
    const action = selectTool.getAttribute("data-action")

    if(action) {
        activeTool = action
    }
    
   
}

tools.forEach((tool) => {
    tool.addEventListener("click", selectTool)
})