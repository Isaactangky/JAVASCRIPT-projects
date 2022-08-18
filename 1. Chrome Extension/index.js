
let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads);
}
deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)

})
tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    const storage = JSON.stringify(myLeads)
    localStorage.setItem("myLeads", storage)
    render(myLeads);
  })
  
})

function render(leads){
  let listItems = ""
  for (let i = 0; i < leads.length; i++){
  /*   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"  
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
    */
    listItems += `
        <li>
          <a target="_blank" href="${leads[i]}"> 
            ${leads[i]}
          </a>
        </li>`
        
  }
  ulEl.innerHTML = listItems
}


saveBtn.addEventListener("click", function(){
  let input = inputEl.value
  inputEl.value = "";
  myLeads.push(input)
  const storage = JSON.stringify(myLeads)
  localStorage.setItem("myLeads", storage)
  render(myLeads);
  
})





