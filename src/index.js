import './style/style1.css'
import './style/style2.less'
import imgFile1 from './img/1.png'

function insertImgElem(imgFile) {
  const img = new Image()
  img.src = imgFile
  document.body.appendChild(img)
}

insertImgElem(imgFile1)

console.log('this is webpack js')