// Your code goes here
//Select the different elements
const logoFunBus = document.querySelector('.logo-heading')
const nav = document.querySelector('.nav');
const funBusHeading = document.querySelector('.logo-heading');
// const intro_h2 = document.querySelector('.intro h2');
const intro_p = document.querySelector('.intro p');
const mainImage = document.querySelector('.intro img');
const h_2 = document.querySelectorAll('h2');
const imgs = document.querySelectorAll('img')
const signMeUpButton = document.querySelectorAll('.btn')
const navLinks = document.querySelectorAll('a')

//Click event
 document.addEventListener('click', function(event){
     console.log(event.type);
 })


 //Changes the link color upon mouseover / mouseout
 navLinks.forEach(changeColor => {
     changeColor.addEventListener('mouseover', () =>{
         changeColor.style.color = 'red'
     })
     changeColor.addEventListener('mouseout', () =>{
         changeColor.style.color = 'black'
     }
 )})

 //This is not working
signMeUpButton.forEach(btn =>{
    btn.addEventListener('click',function(evt){
        if (evt.target === signMeUpButton) {
            console.log('clicked on the Sign Me Up button');
        } else {
            console.log('clicked somewhere else');
        }
    })
})
//scaling the Main Bus Image smaller or larger depending upon click or doubleclick
  mainImage.addEventListener('click',function (enLargeImg) {
    enLargeImg.target.style.transform = "scale(0.5)";
    enLargeImg.target.style.transition = "transform 0.25s ease";
})

  mainImage.addEventListener('dblclick',function (reSetImg) {
    reSetImg.target.style.transform = "scale(2)";
    reSetImg.target.style.transition = "transform 0.25s ease";
})

// made the Fun Bus heading smaller with a click
funBusHeading.addEventListener('click', function(makeLarge){
    makeLarge.target.style.fontSize = "2em" ;
})

//change the border on each H2
h_2.forEach(changeBorder =>{
    changeBorder.addEventListener('click', function(evt){
        evt.target.style.outlineStyle = "groove"
    })
    changeBorder.addEventListener('dblclick', function(evt){
        evt.target.style.outlineStyle = "none"
    })
})
