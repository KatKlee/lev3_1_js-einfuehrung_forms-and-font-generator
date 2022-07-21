let fSize = document.getElementById('size')
const testFont = document.getElementById('fonts')
const fontTest = document.getElementById('fontTest')
const output = document.getElementById('fontOutput')


function changeFontsSize() {
    fontOutput.style.fontFamily = fonts.value
    fontOutput.style.fontSize = size.value + 'px'
    fontOutput.innerHTML = fontTest.value
}