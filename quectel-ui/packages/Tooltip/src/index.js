
export default {
  name: 'Tooltip',
  bind(el) {
    const curStyle = window.getComputedStyle(el, '')

    const textSpan = document.createElement('span')
    textSpan.style.fontSize = curStyle.fontSize
    textSpan.style.fontWeight = curStyle.fontWeight
    textSpan.style.fontFamily = curStyle.fontFamily

    document.body.appendChild(textSpan)

    textSpan.innerHTML = el.innerText
    if (textSpan.offsetWidth > el.offsetWidth) {
      el.style.overflow = 'hidden'
      el.style.textOverflow = 'ellipsis'
      el.style.whiteSpace = 'nowrap'

      el.onmouseenter = (e) => {
        const QTooltipDom = document.createElement('div')
        QTooltipDom.style.cssText = `
        display: inline-block;
        max-width: 400px;
        max-height: 400px;
        position: absolute;
        top: ${e.clientY + 5}px;
        left: ${e.clientX}px;
        padding: 4px 10px;
        overflow: auto;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0 , 0, .6);
        border-radius: 5px;
        z-index: 19999
      `
        QTooltipDom.setAttribute('id', 'q-tooltip')
        document.body.appendChild(QTooltipDom)
        document.getElementById('q-tooltip').innerHTML = el.innerText
      }
      el.onmouseleave = () => {
        const QTooltipDom = document.getElementById('q-tooltip')
        QTooltipDom && document.body.removeChild(QTooltipDom)
      }
    }
    document.body.removeChild(textSpan)
  },
  unbind() {
    const kxmTooltipDom = document.getElementById('kxm-tooltip')
    kxmTooltipDom && document.body.removeChild(kxmTooltipDom)
  }
}
