const input = document.querySelector('.dictionary__input')


input.addEventListener('input', () => {
  const inputValue = input.value.toLowerCase().trim()
  const allLineWords = document.querySelectorAll('.dictionary__line-word')
  
  allLineWords.forEach(item => {
    if (item.textContent.length) {

      if (item.textContent.toLowerCase().trim() === '') return
        
      const originalText = item.textContent
      const lowerText = originalText.toLowerCase().trim()

      // Очистка от прошлой подсветки
      item.innerHTML = originalText

      // Пропустить, если пусто или инпут пуст
      if (lowerText === '' || inputValue === '') return

      const index = lowerText.indexOf(inputValue)
      if (index !== -1) {
        const start = originalText.slice(0, index)
        const match = originalText.slice(index, index + inputValue.length)
        const end = originalText.slice(index + inputValue.length)
        item.innerHTML = `${start}<span class="coincidence">${match}</span>${end}`
      }
    } else {
      const chaildItem = item.querySelectorAll('.coincidence')
      chaildItem.forEach(item => item.classList.remove('coincidence'))

    }
  })
})

