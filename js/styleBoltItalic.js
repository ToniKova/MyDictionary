window.addEventListener('click', (e) => {
  if (e.target.classList.contains('bolt')) {
    styleBolt()
  }
  if (e.target.classList.contains('italic')) {
    styleItalic()
  }
})

function styleBolt () {
  const lineWordAll = document.querySelectorAll('.dictionary__line-word')
  lineWordAll.forEach(item => {
    if (item.classList.contains('active-line')) {
      item.classList.toggle('style-bolt')
    }
  })
}

function styleItalic () {
  const lineWordAll = document.querySelectorAll('.dictionary__line-word')
  lineWordAll.forEach(item => {
    if (item.classList.contains('active-line')) {
      item.classList.toggle('style-italic')
    }
  })
}







