const leftBtn = document.createElement('button')
const rightBtn = document.createElement('button')

leftBtn.classList.add('sidenav-left-btn')
rightBtn.classList.add('sidenav-right-btn')

const ls = leftBtn.style;
const rs = rightBtn.style;

leftBtn.addEventListener('click', () => {
  history.back();
})
rightBtn.addEventListener('click', () => {
  history.forward();
})

document.body.appendChild(leftBtn)
document.body.appendChild(rightBtn)
