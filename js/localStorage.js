import {correctNumber} from './createAndDeleteLine.js'
import {cheackLineWord} from './modalWindowColor.js'

const content = document.querySelector('.dictionary__word-inner')

window.addEventListener('DOMContentLoaded', loadFromLocalStorage)
 
export const dataToSave = [] // родитедительский масив для всех строк, который сохраняется в локал сторадж

//======================================================================
// функция для сохранения данных в локал сторадж
export function saveDictionary () { 
  const allLineWrapper = document.querySelectorAll('.dictionary__line-wrapper')
  dataToSave.length = 0
 
  allLineWrapper.forEach(item => {
    const allLineWords = item.querySelectorAll('.dictionary__line-word')
    const rowData = [] // массив строк с ячейками 

    allLineWords.forEach(item => {
      rowData.push({ // сохрнаяем в объект данные с каждой ячейки 
        text: item.textContent,
        fontSize: item.style.fontSize || '',
        classes: Array.from(item.classList),
        colorText: item.style.color,
        background: item.style.background,
        // combineLine: item.classList.contains('combine-line') ? true : false
      })
      
    })
    console.log(rowData)
    dataToSave.push(rowData) // пушим в главный масив
  })

  localStorage.setItem('dictionaryData', JSON.stringify(dataToSave)) // сохраняем в ловкалСтодж
} 

// =================================================================


// Функция для загрузки данных с локал сторадж
export function loadFromLocalStorage () {
  const savedData = JSON.parse(localStorage.getItem('dictionaryData')) || [] 

  savedData.forEach(item => { // проходимся по строкам с ячейками и создаем ячейки внутри строк
    const newLine = document.createElement('div')
    newLine.classList.add('dictionary__line-wrapper')

    const lineNumber = document.createElement('div')
    lineNumber.classList.add('dictionary__line-number')
    lineNumber.innerHTML = `<button class="line-btn">?</button>`

    const lineCellsWrapper = document.createElement('div')
    lineCellsWrapper.classList.add('dictionary__line-cell-wrapper')

    item.forEach(item => {
      const cellDiv = document.createElement('div')
      cellDiv.setAttribute('contenteditable', true)
      cellDiv.style.fontSize = item.fontSize
      cellDiv.textContent = item.text
      cellDiv.style.color = item.colorText
      cellDiv.style.background = item.background
      item.classes.forEach(cls => cellDiv.classList.add(cls))

      
      lineCellsWrapper.appendChild(cellDiv)
    })

    newLine.appendChild(lineNumber)
    newLine.appendChild(lineCellsWrapper)
    document.querySelector('.dictionary__word-inner').appendChild(newLine)
    cheackLineWord()
    correctNumber()
  })
} 


// =============================================================
//Функция для сохранения данных автоматически и выводом текста "сохранение"

let activeCell = null // Будущая активная ячейка
const saveTimeouts = new Map() // переменная с объектом где храняться таймеры каждой ячейки

content.addEventListener('input', (e) => {
  activeCell = e.target.closest('.dictionary__line-word') // Находим ячейку в которой изминения
  saveMainFile(activeCell)
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('dictionary__span-color')) { // находим нужный цвет текста для ячейки
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('combine')) {
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('accept')) {
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('bolt')) {
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('italic')) {
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('dictionary__size-plus')) {
    saveMainFile(activeCell)
  }
  if (e.target.classList.contains('dictionary__size-minus')) {
    saveMainFile(activeCell)
  }
})

function saveMainFile (activeCell) { 
 if (saveTimeouts.has(activeCell)) { // если у ячейки есть таймер, мы его удаляем
    clearTimeout(saveTimeouts.get(activeCell))
  } 
  showMassage()
}

export function showMassage() {
  const timeoutId = setTimeout(()=> {
    const saveMassage = document.querySelector('.dictionary__save')
    saveMassage.style.opacity = 1
    saveDictionary()
    const hideMassage = setTimeout(()=> saveMassage.style.opacity = 0, 1000)
  },1000)
  saveTimeouts.set(activeCell, timeoutId)
}
