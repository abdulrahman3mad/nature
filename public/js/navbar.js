
const listTypes = document.querySelectorAll(".popdownList")
const navbarLists = document.querySelectorAll(".listItem")


navbarLists.forEach(listItem=>{
    listItem.addEventListener("mouseenter", ()=>{
        document.getElementById(listItem.dataset.listtype).style.display ="block"
    })
    listItem.addEventListener("mouseleave", ()=>{
        document.getElementById(listItem.dataset.listtype).style.display ="none"
    })
})

listTypes.forEach(listType=>{
    listType.addEventListener("mouseenter", ()=>{
        listType.style.display = "block"
    })
    listType.addEventListener("mouseleave", ()=>{
        listType.style.display = "none"
    })
})

const listBar = document.querySelector(".listBar")
const headerPopDownList = document.querySelector(".headerPopdownList")
listBar.addEventListener("click", ()=>{
    if(headerPopDownList.style.display == "none"){
        headerPopDownList.style.display = "block"
    }else{
        headerPopDownList.style.display = "none"
    }
});

const nav = document.getElementById("navBar")
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 0){
      nav.style.position = "fixed"
  }else{
      nav.style.position = "static"
  }
})

const newsItem = document.querySelector(".news")
newsItem.addEventListener("click", ()=>{
    window.scrollTo({
        top:document.querySelector(".newsItem").offsetTop,
        behavior:"smooth"
    })
})