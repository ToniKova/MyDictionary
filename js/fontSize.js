const btnMinus = document.querySelector('.dictionary__size-minus')
const btnPlus = document.querySelector('.dictionary__size-plus')
const countSize = document.querySelector('.dictionary__size-count')
const sizeWrapper = document.querySelector('.dictionary__size-wrapper')


sizeWrapper.addEventListener('click', (e) => {
  const target = e.target

  if (target.classList.contains('dictionary__size-minus')) {
    btnPlus.removeAttribute('disabled')
    const activeLine = document.querySelector('.dictionary__line-word.active-line')
    if (!activeLine) return
    const fontSizeItem = parseInt(getComputedStyle(activeLine).fontSize)
    const newSize = fontSizeItem - 1

    activeLine.style.fontSize = newSize + 'px'
    countSize.textContent = newSize

    if (newSize <= 10) {
      btnMinus.setAttribute('disabled', '')
    } else {
      btnMinus.removeAttribute('disabled')
    }
  }

  if (target.classList.contains('dictionary__size-plus')) {
    btnMinus.removeAttribute('disabled')
    const activeLine = document.querySelector('.dictionary__line-word.active-line')
    const fontSizeItem = parseInt(getComputedStyle(activeLine).fontSize)
    const newSize = fontSizeItem + 1

    activeLine.style.fontSize = newSize + 'px'
    countSize.textContent = newSize

    if (newSize >= 25) {
      btnPlus.setAttribute('disabled', '')
    } else {
      btnPlus.removeAttribute('disabled')
    }
  }
})











