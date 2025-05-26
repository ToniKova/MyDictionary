const btnColor = document.querySelector('.color')
const modalWindowColor = document.querySelector('.dictionary__modal-color')
const wrapperModalcolor = document.querySelector('.dictionary__wrapper-modal-color')
const iconCentr = document.querySelector('.fa-y-combinator')

// const addBtn = document.querySelector('.dictionary__add-btn')

export let arrayColors = [
  "#141414",
  "#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF",
  "#980000", "#FF0000", "#FF9900", "#FFFF00", "#00FF00", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF",
  "#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC",
  "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD",
  "#E06666", "#EA9999", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0",
  "#CC0000", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0",
  "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#0B5394", "#351C75", "#741B47",
  "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#073763", "#20124D", "#4C1130"
]

window.addEventListener('click', (e)=> {
  if (e.target.classList.contains('color')) {
    const allColor = document.querySelectorAll('.dictionary__span-color')
    if (allColor.length > 0) {
      deleteSpanColor()
    }
    modalWindowColor.classList.toggle('modal-color-active')
    btnColor.classList.toggle('active-shadow')
    createSpanColor()
    showActiveColor()

  } else {
    modalWindowColor.classList.remove('modal-color-active')
    btnColor.classList.remove('active-shadow')
    deleteSpanColor()
  }
  if (e.target.classList.contains('dictionary__add-btn')) {
    cheackLineWord()
  }
})
function createSpanColor () {
  // Создание каждлго цвета при открытии модалки
  for (let i = 0; i < arrayColors.length; i++) {
    const spanColor = document.createElement('span')
    spanColor.classList.add('dictionary__span-color')
    spanColor.style.background = arrayColors[i]
    wrapperModalcolor.appendChild(spanColor)
  }
}
export function deleteSpanColor () { 
  // Удление каждого цвета при закрытии модалки
  while (wrapperModalcolor.firstChild) {
    wrapperModalcolor.removeChild(wrapperModalcolor.firstChild)
  }
}

function cheackLineWord () { 
  // Функция для проверки если ли класс активности у ячейки на которую кликнули
  const lineWordAll = document.querySelectorAll('.dictionary__line-word')
  // console.log(lineWordAll)
  lineWordAll.forEach(item => {
    item.addEventListener('click', () => {
      fontSizeLine(item)
      lineWordAll.forEach(item => {
        item.classList.remove('active-line')
      })
      if (!item.classList.contains('active-line')) {
        item.classList.add('active-line')
      }
    })
  })
}




function fontSizeLine (item) {
  if (item.textContent.trim().length > 0) {
    const countSize = document.querySelector('.dictionary__size-count')
    let currentSize = parseInt(window.getComputedStyle(item).fontSize, 10);
    // console.log(currentSize)
    if (!item.style.fontSize) {
      item.style.fontSize = currentSize;
    } 
    // updateFontSizeDisplay(item)
    countSize.textContent = currentSize;
  } 

}



function updateFontSizeDisplay(item) {
  const countSize = document.querySelector('.dictionary__size-count');
  const currentSize = parseInt(item.style.fontSize, 10);
  countSize.textContent = currentSize + 'px';
}
function increaseFontSize(item) {
  let currentSize = parseInt(item.style.fontSize, 10);
  currentSize += 1; // Увеличиваем размер на 1px
  item.style.fontSize = currentSize + 'px';

  // Обновляем отображаемый размер шрифта
  updateFontSizeDisplay(item);
}


// currentSize = parseInt(item.style.fontSize, 10); // Получаем значение из inline стилей



// if (item.textContent.trim().length > 0) {
//   const currentSize = window.getComputedStyle(item).fontSize;
//   // const currentSize = item.style.fontSize
//   console.log(currentSize)

//   countSize.textContent = currentSize
// } else {
//   countSize.textContent = 14
// }





// function testfunction () {
//   const allLine = document.querySelectorAll('.dictionary__line-word') 
//   allLine.forEach(item => {
//     console.log(1)
//     if (item.classList.contains('active-first')) {
//       iconCentr.style.color = '#fff'
//     } else if (!item.classList.contains('active-first')) {
//       iconCentr.style.color = '#7e7e7e'
//     }
//   })
// }

function showActiveColor () {
  //функция для настройки нужного цвета в ячейке из палитры цветов
  const AllColors = document.querySelectorAll('.dictionary__span-color')
  const lineWord = document.querySelectorAll('.dictionary__line-word')
  AllColors.forEach(item => {
    item.addEventListener('click', () => {
      const itemBackground = item.style.background
      lineWord.forEach(item => {
        if (item.classList.contains('active-line')) {
          item.style.color = itemBackground
        }
      })
    })
  })
}








