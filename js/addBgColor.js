// import createSpanColor from "./modalWindowColor.js"
import {arrayColors} from "./modalWindowColor.js"
// import {deleteSpanColor} from "./modalWindowColor.js"

const bgBtn = document.querySelector('.background')
const wrapperModalBackground = document.querySelector('.dictionary__wrapper-modal-background')
const modalWindowBackground = document.querySelector('.dictionary__modal-background')

window.addEventListener('click', (e) => {
  if(e.target.classList.contains('background')) {
    const allColors = document.querySelectorAll('.dictionary__span-color')
    if (allColors.length > 0) {
      deleteSpanColor()
    }
    createSpanBaacground()
    showActiveColor()
    modalWindowBackground.classList.toggle('modal-background-active')
    bgBtn.classList.toggle('active-shadow')
  } else {
    bgBtn.classList.remove('active-shadow')
    modalWindowBackground.classList.remove('modal-background-active')
    deleteSpanColor()
  }
})

function createSpanBaacground () {
  for (let i = 0; i < arrayColors.length; i++) {
    const spanColor = document.createElement('span')
    spanColor.classList.add('dictionary__span-color')
    spanColor.style.background = arrayColors[i]
    wrapperModalBackground.appendChild(spanColor)
  }
}

function deleteSpanColor () { 
  // Удление каждого цвета при закрытии модалки
  while (wrapperModalBackground.firstChild) {
    wrapperModalBackground.removeChild(wrapperModalBackground.firstChild)
  }
}

function showActiveColor () {
  //функция для настройки нужного цвета в ячейке из палитры цветов
  const AllColors = document.querySelectorAll('.dictionary__span-color')
  const lineWord = document.querySelectorAll('.dictionary__line-word')
  AllColors.forEach(item => {
    item.addEventListener('click', () => {
      const itemBackground = item.style.background
      lineWord.forEach(item => {
        if (item.classList.contains('active-line')) {
          item.style.background = itemBackground
        }
      })
    })
  })
}

