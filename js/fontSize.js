const btnMinus = document.querySelector('.dictionary__size-minus')
const btnPlus = document.querySelector('.dictionary__size-plus')
const countSize = document.querySelector('.dictionary__size-count')
let countNumber = 14

btnMinus.addEventListener('click', () => {
  const allLineWord = document.querySelectorAll('.dictionary__line-word')
  allLineWord.forEach(item => {
    if (item.classList.contains('active-line')){
      if (item.textContent.trim().length > 0) {
        countNumber--
        item.style.fontSize = countNumber + 'px'
        if (countNumber < 0) {
          countNumber = 0
        }
        countSize.textContent = countNumber
      }
    }
  })
})
btnPlus.addEventListener('click', () => {
  const allLineWord = document.querySelectorAll('.dictionary__line-word')
  allLineWord.forEach(item => {
    if (item.classList.contains('active-line')){
      if (item.textContent.trim().length > 0) {
        countNumber++
        item.style.fontSize = countNumber + 'px'
        if (countNumber > 30) {
          countNumber = 30
        }
        countSize.textContent = countNumber
      }
    }
  })
  
})

