import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
// import './style.scss'
// import imgUrl from './images/wings.jpg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>こんにちは、Vite!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// let img = new Image()
// img.src = imgUrl
// // img.src = 'images/wings.jpg'
// document.querySelector('#app').append(img)
