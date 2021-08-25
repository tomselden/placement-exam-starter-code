// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Thomas Selden" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gBread = 0      // Ginger bread
let cCookie = 0      // Chocolate Chip
let sCookie = 0   // Sugar Sprinkle

let totalCookies = 0
totalCookies = document.querySelector('#qty-total')

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
gBread = document.querySelector('#qty-gb')

document.getElementById('add-gb').addEventListener('click', function(){
    gBread.innerHTML = parseInt(gBread.innerHTML)+1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)+1

})

document.getElementById('minus-gb').addEventListener('click', function(){
    if (gBread.innerHTML > 0) {
    gBread.innerHTML = parseInt(gBread.innerHTML)-1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)-1
    
       
    }
     
})

cCookie = document.querySelector('#qty-cc')

document.getElementById('add-cc').addEventListener('click', function(){
    cCookie.innerHTML = parseInt(cCookie.innerHTML)+1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)+1
    
})    

document.getElementById('minus-cc').addEventListener('click', function(){
    if (cCookie.innerHTML > 0) {
    cCookie.innerHTML = parseInt(cCookie.innerHTML)-1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)-1
    
       
    }
      
})    

sCookie = document.querySelector('#qty-sugar')

document.getElementById('add-sugar').addEventListener('click', function(){
    sCookie.innerHTML = parseInt(sCookie.innerHTML)+1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)+1

})
document.getElementById('minus-sugar').addEventListener('click', function(){
    if (sCookie.innerHTML > 0) {
    sCookie.innerHTML = parseInt(sCookie.innerHTML)-1
    totalCookies.innerHTML = parseInt(totalCookies.innerHTML)-1
    
        
    }
   
})    




    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked


// TODO: Hook up event listeners for the rest of the buttons