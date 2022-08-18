
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.querySelector(".convert-btn")
const userIpt = document.querySelector(".user-ipt")
const resultEl = document.querySelectorAll("p")
const data = [
  {ratio: 3.281,
    metrics:["meters", "feets"]}, 
  {ratio: 0.264,
    metrics:["liters", "gallons"]},
  {ratio:2.204,
    metrics:["kilos", "pounds"]}]

convertBtn.addEventListener("click", function(){
  let inputVal = Number(userIpt.value)
  for (let i = 0; i < data.length; i++ ){
    let result = buildStr(i, inputVal)
    resultEl[i].textContent = result
  }
})

function buildStr(index, input){
  const mulRatio = (input * data[index].ratio).toFixed(3)
  const divRatio = (input / data[index].ratio).toFixed(3)
  const unit1 = data[index]["metrics"][0]
  const unit2 = data[index]["metrics"][1]
  let result = `
  ${input} ${unit1} = ${mulRatio} ${unit2} | ${input} ${unit2} = ${divRatio} ${unit1}
  `
  return result
  
}
