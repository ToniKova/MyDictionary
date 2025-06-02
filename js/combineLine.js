const combineBtn = document.querySelector('.combine')
const modalWarning = document.querySelector('.dictionart__modal-warning')
const overlay = document.querySelector('.dictionary__overlay')
// const iconCentr = document.querySelector('.fa-y-combinator')


combineBtn.addEventListener('click', () => {
  combineCell()
})

window.addEventListener('click', (e) => {
  //Находим клик по нумерации линии 
  if (e.target.classList.contains('line-btn')) {
    const currentTarget = e.target
    findNumberLine(currentTarget)
  } else {
    const allCell = document.querySelectorAll('.dictionary__line-cell-wrapper')
    allCell.forEach(item => {
      // item.classList.remove('active-border')
    })
  }


  if (e.target.classList.contains('accept')) {
    const allActiveBorderLine = document.querySelectorAll('.active-border')
    allActiveBorderLine.forEach(item => {
      const lineChild = item.querySelectorAll('.dictionary__line-word')
      lineChild.forEach(item => {
        item.classList.add('combine-line')
      })

    })
    modalWarning.classList.remove('active-wirning')
  
  }
  

})

function findNumberLine (currentTarget) {
  //находим следубщий элемент после кнопки на которую нажали
  const allLine = document.querySelectorAll('.dictionary__line-word')
  allLine.forEach(item => {
    item.classList.remove('active-line')
  })
  const parentElement = currentTarget.parentElement
  const nextElement = parentElement.nextElementSibling
  nextElement.classList.add('active-border')
}

function combineCell () {
  //Добавляем активный бордер, и активный класс который скроет три и растянет первую
  const allActiveBorderLine = document.querySelectorAll('.active-border')
  allActiveBorderLine.forEach(item => {
    const lineChild = item.querySelectorAll('.dictionary__line-word')
    // const firstChild = document.querySelector('.dictionary__line-word')
    lineChild.forEach(item => {
      // firstChild.classList.add('active-first')
        // item.classList.toggle('combine-line')
        
      if (item.textContent !== '') {
        modalWarning.classList.add('active-wirning')
        // overlay.classList.add('active-overlay')
      } else {
        
        // item.classList.add('combine-line')
      }
    })
  })

  
}


// function accept () {
//   const allActiveBorderLine = document.querySelectorAll('.active-border')
//   allActiveBorderLine.forEach(item => {
//     const lineChild = item.document.querySelectorAll('.dictionary__line-word')
//     lineChild.forEach(item => {
//       item.classList.toggle('combine-line')
//     })
//   })
//   // const btnAccept = document.querySelector('.accept')
// }








