import "./addBgColor.js"
import "./modalWindowColor.js"
import "./combineLine.js"
import "./styleBoltItalic.js"
import "./fontSize.js"
// import {findNumberLine} from "./combineLine.js"


const mainBtn = document.querySelector('.dictionary__add-btn')
const content = document.querySelector('.dictionary__word-inner')
let columnCount = 1

mainBtn.addEventListener('click',() => {
  addColumns()
  // findNumberLine()
})
function addColumns () {
  const newColumn = `
  <div class="dictionary__line-wrapper">
      <div class="dictionary__line-number style-bolt"><button class="line-btn">${columnCount}</button></div>
      <div class="dictionary__line-cell-wrapper">
        <div class="dictionary__line-word word fixed word-center"contenteditable="true" ></div>
        <div class="dictionary__line-word transcription fixed word-center" contenteditable="true"></div>
        <div class="dictionary__line-word translation fixed word-center" contenteditable="true"></div>
        <div class="dictionary__line-word examples flexible word-center" contenteditable="true"></div>
      </div>
    </div>
  `
  content.insertAdjacentHTML('beforebegin', newColumn)
  columnCount++;
}






