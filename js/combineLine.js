const combineBtn = document.querySelector('.combine')
// const iconCentr = document.querySelector('.fa-y-combinator')
combineBtn.addEventListener('click', () => {
  combineCell()
})



window.addEventListener('click', (e) => {
  //Находим клик по нумерации линии 
  if (e.target.classList.contains('line-btn')) {
    const currentTarget = e.target
    console.log(currentTarget)
    findNumberLine(currentTarget)
  } else {
    const allCell = document.querySelectorAll('.dictionary__line-cell-wrapper')
    allCell.forEach(item => {
      item.classList.remove('active-border')
    })
  }
})

function findNumberLine (currentTarget) {
  //находим следубщий элемент после кнопки на которую нажали
  const allLine = document.querySelectorAll('.dictionary__line-word')
  allLine.forEach(item => {
    item.classList.remove('active-line')
  })
  const parentElement = currentTarget.parentElement
  console.log(parentElement)
  const nextElement = parentElement.nextElementSibling
  // console.log(nextElement)
  nextElement.classList.toggle('active-border')
}

function combineCell () {
  //Добавляем активный бордер, и активный класс который скроет три и растянет первую
  const allActiveBorderLine = document.querySelectorAll('.active-border')
  allActiveBorderLine.forEach(item => {
    const lineChild = item.querySelectorAll('.dictionary__line-word')
    // const firstChild = document.querySelector('.dictionary__line-word')
    lineChild.forEach(item => {
      item.classList.toggle('combine-line')
      // firstChild.classList.add('active-first')
      if (item.textContent !== '') {
        alert('не пусто')
      }
      console.log(item.textContent)
    })

  })
}








