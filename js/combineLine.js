const combineBtn = document.querySelector('.combine')
const modalWarning = document.querySelector('.dictionart__modal-warning')
const overLay = document.querySelector('.dictionary__overlay')
const btnConfirm = document.querySelector('.accept')



combineBtn.addEventListener('click', () => {
  combineCell()
})


window.addEventListener('click', (e) => {
  if (e.target.classList.contains('line-btn')) {
    const currentTarget = e.target
    findPerent(currentTarget)
  }
})

// ===============================================

function findPerent (currentTarget) {
  const parentElement = currentTarget.parentElement
  const nextElement = parentElement.nextElementSibling
  nextElement.classList.toggle('active-border')
}

// ==================================================

function combineCell () {
  const activeBorders = document.querySelectorAll('.active-border')
  
  activeBorders.forEach(item => {
    const allLinesWord = item.querySelectorAll('.dictionary__line-word');

    const allEmpte = Array.from(allLinesWord).every(item => item.textContent.trim() === '')
    if (allEmpte) {
      allLinesWord.forEach(item => item.classList.toggle('combine-line'))
      item.classList.remove('active-border')
      return
    }

    const alreadyCombined = Array.from(allLinesWord).every(item => item.classList.contains('combine-line'))
    if (alreadyCombined) {
      allLinesWord.forEach(item => item.classList.remove('combine-line'))
      item.classList.remove('active-border')
      return
    }

    confirmAnswer(allLinesWord, activeBorders)
  })
}

// ======================================================
 
function confirmAnswer(allLinesWord, activeBorders) {
  modalWarning.classList.add('active-wirning')
  overLay.classList.add('active-overlay')
  btnConfirm.addEventListener('click', () => {
    const AllLineWords = document.querySelectorAll('.dictionary__line-word')

    allLinesWord.forEach(item => {
      item.classList.add('combine-line')
      modalWarning.classList.remove('active-wirning')

      activeBorders.forEach(item => {
        item.classList.remove('active-border')
      })

      AllLineWords.forEach(item => {
        item.classList.remove('active-line')
        overLay.classList.remove('active-overlay')
      })
    })
  })
}









// =========================================================================
// ========================================================================


// window.addEventListener('click', (e) => {
//   //Находим клик по нумерации линии 
//   if (e.target.classList.contains('line-btn')) {
//     const currentTarget = e.target
//     findNumberLine(currentTarget)
//   } else {
//     const allCell = document.querySelectorAll('.dictionary__line-cell-wrapper')
//     allCell.forEach(item => {
//       item.classList.remove('active-border')
//     })
//   }


//   if (e.target.classList.contains('accept')) {
//     // accept()
//     const allActiveBorderLine = document.querySelectorAll('.active-border')
//     allActiveBorderLine.forEach(item => {
//       const lineChild = item.querySelectorAll('.dictionary__line-word')
//       lineChild.forEach(item => {
//         item.classList.add('combine-line')
//       })
//     })
//     modalWarning.classList.remove('active-wirning')
//     const allCell = document.querySelectorAll('.dictionary__line-cell-wrapper')
//     allCell.forEach(item => {
//       item.classList.remove('active-border')
//     })
  
//   }
// })

// // =====================================================

// function findNumberLine (currentTarget) {
//   //находим следубщий элемент после кнопки на которую нажали
//   const allLine = document.querySelectorAll('.dictionary__line-word')
//   allLine.forEach(item => {
//     item.classList.remove('active-line')
//   })
//   const parentElement = currentTarget.parentElement
//   const nextElement = parentElement.nextElementSibling
//   nextElement.classList.toggle('active-border')
// }


// // =====================================================

// function combineCell () {
//   //Добавляем активный бордер, и активный класс который скроет три и растянет первую
//   const allActiveBorderLine = document.querySelectorAll('.active-border')
//   allActiveBorderLine.forEach(item => {
//     const lineChild = item.querySelectorAll('.dictionary__line-word')
//     // const firstChild = document.querySelector('.dictionary__line-word')
//     lineChild.forEach(item => {
//       // firstChild.classList.add('active-first')
//         // item.classList.toggle('combine-line')
        
//       if (item.textContent.trim() !== '') {
//         modalWarning.classList.add('active-wirning')
//       } else {
//       }
//     })
//   })

  
// }


// function accept () {
//   const allActiveBorderLine = document.querySelectorAll('.active-border')
//   allActiveBorderLine.forEach(item => {
//     const lineChild = item.document.querySelectorAll('.dictionary__line-word')
//     lineChild.forEach(item => {
//       item.classList.toggle('combine-line')
//     })
//   })
// }








