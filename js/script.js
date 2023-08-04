//variaveis
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const inputColor = document.querySelector(".input_color")
const tools = document.querySelectorAll(".button_tool")
const sizeButton = document.querySelector(".button_size")
const buttonClear = document.querySelector(".button_clear")

let burshSize=10

const draw = (x, y) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(x,y, burshSize, burshSize)
}

