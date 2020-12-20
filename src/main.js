class Compute {
  plus(a,b){
    return a + b
  }
  minus(a,b){
    return a - b
  }
  mul(a,b){
    return a * b
  }
  div(a,b){
    return a / b
  }
}

class Calculator extends Compute{
  constructor(doc) {
    super()

    const oCal = document.querySelector('.J_calculator')

    this.fInput = oCal.querySelectorAll('input')[0]
    this.sInput = oCal.querySelectorAll('input')[1]

    this.oBtnGroup = oCal.querySelector('.btn-group')
    this.oBtnItems = this.oBtnGroup.querySelectorAll('button')
    this.oResult = oCal.getElementsByClassName('result')[0]


    this.data = this.defineData()
    console.log(this.data)
    this.btnIndex = 0
  }

  init() {
    this.bindEvent()
  }

  bindEvent() {
    this.oBtnGroup.addEventListener('click', this.onFieldBtn.bind(this), false)
    this.fInput.addEventListener('input', this.onNumberInput.bind(this, false))
    this.sInput.addEventListener('input', this.onNumberInput.bind(this, false))

  }

  // 定义数据
  defineData() {
    // 定义初始值
    let _obj = {},
      fNumber = 0,
      sNumber = 0,
      field = 'plus'

    // 取到外部的this 能在defineProperties内部中访问到
    const _self = this

    Object.defineProperties(_obj, {
      fNumber: {
        get() {
          console.log(' "fNumber" 已经被获取 ')
          return fNumber
        },
        set(newVal) {
          fNumber = newVal
          _self.computeResult(fNumber, sNumber, field)
          console.log(` 当前的值：“ fNumber ” 发生改变。 [${fNumber}]`)
        }
      },
      sNumber: {
        get() {
          console.log(' "sNumber" 已经被获取 ')
          return sNumber
        },
        set(newVal) {
          sNumber = newVal
          _self.computeResult(fNumber, sNumber, field)
          console.log(` 当前的值：“ sNumber ” 发生改变。 [${sNumber}]`)
        }

      },
      field: {
        get() {
          console.log(' "field" 已经被获取 ')
          return field
        },
        set(newVal) {
          field = newVal
          _self.computeResult(fNumber, sNumber, field)
          console.log(` 当前的值：“ field ” 发生改变。 [${field}]`)
        }

      },
    })
    return _obj
  }


  onFieldBtn(ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase()

    tagName === 'button' && this.fieldUpdate(tar)
  }

  // 切换按钮，
  fieldUpdate(target) {
    // 当点击之前的按钮样式清空
    this.oBtnItems[this.btnIndex].className = ''
    // 获取 当前按钮的index
    this.btnIndex = [].indexOf.call(this.oBtnItems, target)
    target.className += 'current'
    // 改变当前按钮的 属性field
    this.data.field = target.getAttribute('data-field')
  }

  // 获取 input 输入的值 并给 this.data。fNumber / sNumber
  onNumberInput(ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      className = tar.className,
      val = Number(tar.value.replace(/\s+/g, '')) || 0


    switch (className) {
      case 'f-input':
        this.data.fNumber = val
        break;
      case  's-input':
        this.data.sNumber = val
        break;
      default:
        break
    }
  }



  computeResult(fNumber, sNumber, field) {
    this.oResult.innerText = this[field](fNumber,sNumber)
  }


}


new Calculator(document).init()







