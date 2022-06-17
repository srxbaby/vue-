import{ marquee} from "./marquee.js"
import {tab} from "./tab.js"
marquee()
tab()
import './styles/index.css'
import './styles/index.less'

//图片
import imgSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
const gif=document.createElement('img')
const png=document.createElement('img')
gif.src=imgSrc
png.src=pngSrc
document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'


