const leftArrows = document.querySelectorAll(".leftArrow")
const rightArrows = document.querySelectorAll(".rightArrow")
const partnersLeftArrow = document.querySelector(".partnersLeftArrow")
const partnersRightArrow = document.querySelector(".partnersRightArrow")

rightArrows.forEach(rightArrow=>{
    rightArrow.addEventListener("click", ()=>{
        const distance = rightArrow.previousElementSibling.getBoundingClientRect().x + 20;
        rightArrow.previousElementSibling.previousElementSibling.style.display = "block"
        rightArrow.previousElementSibling.style.transform = `translateX(${distance - 310}px)`
    })  
})

leftArrows.forEach(leftArrow=>{
    leftArrow.addEventListener("click", ()=>{
        const distance = leftArrow.nextElementSibling.getBoundingClientRect().x - 20 ;
        if(distance+20<0){
            leftArrow.nextElementSibling.style.transform = `translateX(${distance + 310}px)`
        }
    })
})

partnersLeftArrow.addEventListener("click", ()=>{
    const distance = partnersLeftArrow.nextElementSibling.getBoundingClientRect().x
    partnersLeftArrow.nextElementSibling.style.transform = `translateX(${distance + 200}px)`
})

partnersRightArrow.addEventListener("click", ()=>{
    const distance = partnersRightArrow.previousElementSibling.getBoundingClientRect().x
    partnersRightArrow.previousElementSibling.style.transform = `translateX(${distance - 200}px)`
})


const contactBar = document.getElementById("contactBar")
const contactForm = document.getElementById("contactForm")
const closeIcon = document.getElementById("closeIcon")

contactBar.addEventListener("click", ()=>{
    contactForm.classList.add("translateForm")
});

closeIcon.addEventListener("click", ()=>{
    contactForm.classList.remove("translateForm")
})


const downArrows = document.querySelectorAll(".downArrow")
downArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        window.scrollTo({
            top:document.querySelector("." + arrow.dataset.sec).offsetTop,
            behavior:"smooth"
        })
   })
});