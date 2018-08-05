var numberofSquares = 6 ;
var colors = generateRandomColors(numberofSquares) ;

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");





easyBtn.addEventListener("click" , function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numSquares = 3 ;

     // generating all new color
     colors = generateRandomColors(numSquares);
     //picking a new random color
     pickedcolor = pickcolor() ;
     // change color of square
     colordisplay.textContent = pickedcolor ;
 
     for(var i=0 ; i<squares.length ; i++){
        if(colors[i]){ 
         squares[i].style.backgroundColor = colors[i] ;
        }
     
        else {
            squares[i].style.display = "none" ;
        }
      
    }

});

hardBtn.addEventListener("click" , function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares = 6 ;
     // generating all new color
     colors = generateRandomColors(numSquares);
     //picking a new random color
     pickedcolor = pickcolor() ;
     // change color of square
     colordisplay.textContent = pickedcolor ;
 
     for(var i=0 ; i<squares.length ; i++){
        
        squares[i].style.backgroundColor = colors[i] ;
        squares[i].style.display = "block" ;
    }

    resetButton.addEventListener("click",function(){
        // generating all new color
        colors = generateRandomColors(numSquares);
        //picking a new random color
        pickedcolor = pickcolor() ;
        // change color of square
        colordisplay.textContent = pickedcolor ;
        this.textContent = "New colors"
    
        messageDisplay.textContent = "" ;
    
        for(var i=0 ; i<squares.length ; i++){
            
            squares[i].style.backgroundColor = colors[i] ;
        }
        h1.style.backgroundColor = "steelblue" ;
    
    })
      
    
});
    

resetButton.addEventListener("click",function(){
    // generating all new color
    colors = generateRandomColors(numSquares);
    //picking a new random color
    pickedcolor = pickcolor() ;
    // change color of square
    colordisplay.textContent = pickedcolor ;
    this.textContent = "New colors"

    messageDisplay.textContent = "" ;

    for(var i=0 ; i<squares.length ; i++){
        
        squares[i].style.backgroundColor = colors[i] ;
    }
    h1.style.backgroundColor = "steelblue" ;

})


colordisplay.textContent = pickedcolor ;

for(var i=0 ; i<squares.length ; i++){

// add initial colors to squares

    squares[i].style.backgroundColor = colors[i] ;

// add click listeners to square 
   squares[i].addEventListener("click" , function(){
    var clickedcolor  = this.style.backgroundColor ;
    // compare color to pickedcolor
    if(clickedcolor=== pickedcolor){
        messageDisplay.textContent = "Correct" ;
        resetButton.textContent = "Play Again" ;
        changeColors(clickedcolor);
        h1.style.backgroundColor = clickedcolor ;

    } else{
        this.style.backgroundColor =" black" ;
        messageDisplay.textContent = "Try Again" ;
    }
   });
}

function changeColors(color){
    for(var i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = color ;
    }


}
function pickcolor(){
   var random =Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr =[]
    for(var i=0; i<num ;i++){
        // getting random color and push into array
        arr.push(randomColor())

    }
    return arr ;

}
function randomColor(){
    // for red
    var r = Math.floor(Math.random()*256);
    // for green
    var g = Math.floor(Math.random()*256);
    // for blue
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")" ;

}