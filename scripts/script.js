//color picker option

const containerContent = document.querySelector('.container') //container

const whiteboardOutline = document.createElement('div')  //whiteboard
whiteboardOutline.style
whiteboardOutline.classList.add('whiteboardOutline')
containerContent.appendChild(whiteboardOutline)
const menus = document.querySelector('menu') //all sub menus

const colorIcon = document.querySelector('.colorPicker') //color icon
const colorMenu = document.querySelector('.color') //color menu 
const colorPick = document.querySelector ('.colorPick')
    colorIcon.addEventListener('click', function(e){
       colorPick.classList.toggle('colorPickReveal')
       colorMenu.classList.toggle('colorSub')
    })
    
const borderIcon = document.querySelector('.border') //border icon
const borderMenu = document.querySelector('.borderMenu') //border menu
const borderCheck = document.querySelector('.borderCheck')
    /*borderIcon.addEventListener('click', function(e){
        borderCheck.classList.toggle('borderCheckReveal')
        borderMenu.classList.toggle('borderSub')
        let borderValue = borderMenu.classList.contains(`borderSub`)

    if (value === true) {
        block.classList.add('block')
    } else if (value === false) {
        block.classList.remove('block')
    } */

const rainbowIcon = document.querySelector('.rainbow') //rainbow Icon
const rainbowMenu = document.querySelector('.rainbowMenu') //rainbow menu
const rainbowCheck = document.querySelector('.rainbowCheck')
    rainbowIcon.addEventListener('click', function(e){
        rainbowCheck.classList.toggle('rainbowCheckReveal')
        rainbowMenu.classList.toggle('rainbowSub')
        let value = rainbowMenu.classList.contains(`rainbowSub`)

    if (value === true) {
        console.log('active')
    }
    })


const pixelIcon = document.querySelector('.pixelDensity') //pixel icon
const pixelMenu = document.querySelector('.pixelMenu') //pixel menu
const slider = document.querySelector('.slider') //pixel slider

let eraserWhite = document.querySelector('.eraserWhite')
let eraserMenu = document.querySelector('.eraserMenu')
let eraserIcon = document.querySelector('.eraser')
let eraserText = document.querySelector(".eraserText")

    eraserIcon.addEventListener('click', function (e){
        eraserIcon.classList.toggle('big')
        eraserMenu.classList.toggle('eraserSub')
        eraserText.classList.toggle('eraserTextReveal')
        eraserIcon.classList.toggle('big')
    })


    pixelIcon.addEventListener('click', function(e){
        slider.classList.toggle('sliderShow')
        pixelMenu.classList.toggle('pixelSub')
    })

        slider.oninput = function() {
            whiteboardOutline.querySelectorAll('.block').forEach(child => child.remove())
            input = this.value
            size = input * input
            for (let i = 0; i !== size; ++i) {
                const block = document.createElement('div')
                block.classList.toggle('block')
                whiteboardOutline.addEventListener('mousedown', function(e){
                    block.addEventListener('mouseover', function(e) {
                let value =  eraserMenu.classList.contains('eraserSub')
                let rainbow = rainbowMenu.classList.contains(`rainbowSub`)

                    if (value === true) {
                        rainbowMenu.classList.remove('rainbowSub')
                        block.style.backgroundColor = `${eraserWhite.value}`
                    } else if (value === false && rainbow === false ) {
                        block.style.backgroundColor = `${colorPick.value}`
                    } else if (value === false && rainbow === true ) {
                        let symbols = '0123456789ABCDEF'
                        let color = '#'
                        for(let i = 0; i < 6; i++) {
                            color = color + symbols[Math.floor(Math.random() * 16)]
                        }
                        block.style.backgroundColor = `${color}`
                    }
                })
                })
                whiteboardOutline.appendChild(block)
                whiteboardOutline.style.gridTemplateColumns = `repeat(${input}, 1fr)`
                whiteboardOutline.style.gridTemplateRows = `repeat(${input}, 1fr)`
        }
    }

// shading




        /* block.addEventListener('mouseover', () => block.style.backgroundColor = `${colorPick.value}`) */