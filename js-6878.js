
// non dynamic version
// function parisFunction(){
//   document.getElementById("tab1-button").classList.remove("active-button")
//   document.getElementById("tab3-button").classList.remove("active-button")
//   document.getElementById("tab2-button").classList.add("active-button")


//   document.getElementById("tab1-content").classList.add("hidden")
//   document.getElementById("tab3-content").classList.add("hidden")
//   document.getElementById("tab2-content").classList.remove("hidden")
// }


// function tokyoFunction(){
//     document.getElementById("tab1-button").classList.remove("active-button")
//     document.getElementById("tab2-button").classList.remove("active-button")
//     document.getElementById("tab3-button").classList.add("active-button")
  
  
//     document.getElementById("tab1-content").classList.add("hidden")
//     document.getElementById("tab2-content").classList.add("hidden")
//     document.getElementById("tab3-content").classList.remove("hidden")
//   }

//   function londonFunction(){
//     document.getElementById("tab2-button").classList.remove("active-button")
//     document.getElementById("tab3-button").classList.remove("active-button")
//     document.getElementById("tab1-button").classList.add("active-button")
  
  
//     document.getElementById("tab2-content").classList.add("hidden")
//     document.getElementById("tab3-content").classList.add("hidden")
//     document.getElementById("tab1-content").classList.remove("hidden")
//   }
  

// dynamic version

function dynamicFunction(activeTab){
const buttonId=activeTab+"-button"
const contentId=activeTab+"-content"
for (element of document.getElementsByClassName("button-class")){
    element.classList.remove("active-button")
}
document.getElementById(buttonId).classList.add("active-button")

for (element of document.getElementsByClassName("content-class")){
    element.classList.add("hidden")
}
document.getElementById(contentId).classList.remove("hidden")
}
