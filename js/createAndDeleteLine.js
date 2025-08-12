import {showMassage, saveDictionary} from './localStorage.js'

const mainBtn = document.querySelector('.dictionary__add-btn')
const content = document.querySelector('.dictionary__word-inner')
const deleteBtn = document.querySelector('.delete')
let columnCount = 1 

mainBtn.addEventListener('click', addColumns)
deleteBtn.addEventListener('click', deleteItem)


//=========================================================
// Функция для удаления строк

function deleteItem () {
  const allLineWrapper = document.querySelectorAll('.dictionary__line-wrapper')
  
  allLineWrapper.forEach(itemDelete => {
    const oneItemDelete = itemDelete.querySelector('.dictionary__line-cell-wrapper')
    if (oneItemDelete.classList.contains('active-border')) {
      itemDelete.remove()
    }
  })
  correctNumber()
  saveDictionary()
  showMassage()
}  


//====================================================================
// Функция для коректного отображения нумурации

export function correctNumber () {
  const allLines = document.querySelectorAll('.dictionary__line-wrapper')

  allLines.forEach((item, index) => {
    const itemNumber = item.querySelector('.line-btn')
    itemNumber.textContent = (index + 1)
  })
}
 
//==========================================================
// Функция создания новых строк

function addColumns () {
  const newColumn = `
  <div class="dictionary__line-wrapper">
      <div class="dictionary__line-number"><button class="line-btn">${columnCount}</button></div>
      <div class="dictionary__line-cell-wrapper">
        <div class="dictionary__line-word word fixed word-center"contenteditable="true" ></div>
        <div class="dictionary__line-word transcription fixed word-center" contenteditable="true"></div>
        <div class="dictionary__line-word translation fixed word-center" contenteditable="true"></div>
        <div class="dictionary__line-word examples flexible word-center" contenteditable="true"></div>
      </div>
    </div>
  `
  content.insertAdjacentHTML('beforeend', newColumn)
  correctNumber()
  saveDictionary()
  showMassage()
}