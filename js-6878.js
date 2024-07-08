
function parisFunction(){
  document.getElementById("button1-content").classList.remove("active-button")
  document.getElementById("button3-content").classList.remove("active-button")
  document.getElementById("button2-content").classList.add("active-button")


  document.getElementById("tab1-content").classList.add("hidden")
  document.getElementById("tab3-content").classList.add("hidden")
  document.getElementById("tab2-content").classList.remove("hidden")
}


function tokyoFunction(){
    document.getElementById("button1-content").classList.remove("active-button")
    document.getElementById("button2-content").classList.remove("active-button")
    document.getElementById("button3-content").classList.add("active-button")
  
  
    document.getElementById("tab1-content").classList.add("hidden")
    document.getElementById("tab2-content").classList.add("hidden")
    document.getElementById("tab3-content").classList.remove("hidden")
  }

  function londonFunction(){
    document.getElementById("button2-content").classList.remove("active-button")
    document.getElementById("button3-content").classList.remove("active-button")
    document.getElementById("button1-content").classList.add("active-button")
  
  
    document.getElementById("tab2-content").classList.add("hidden")
    document.getElementById("tab3-content").classList.add("hidden")
    document.getElementById("tab1-content").classList.remove("hidden")
  }
  


