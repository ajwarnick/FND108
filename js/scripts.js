function wholeRandomNumber(max, min){
    var RM = Math.floor(Math.random() * max) + min;
    return RM;
}

if( document.getElementById('random_town') ){

    document.getElementById('random_town').onclick=function(){
        var num =  wholeRandomNumber(3,1);

        if(num == 1){
            window.location.href = '/river/index.html';
        }else if(num == 2){
            window.location.href = '/town/square.html'; 
        }else{
            window.location.href = '/town/town.html';
        }
    }
}


























/*

if( document.getElementById('random_river') ){


    document.getElementById('random_river').onclick=function(){
        var msg = randomWholeNum(2);
        
        if( msg == 1 ){
            window.location.href = '/page1.html';
        }else if( msg == 2 ){
            window.location.href = '/page2.html';

        }
    }
}










/* 

if( document.getElementById('random_town') ){
    document.getElementById('random_town').onclick=function(){
        var msg = randomWholeNum(4);
        
        if( msg == 1 ){
            window.location.href = '/page1.html';
        }else if( msg == 2 ){
            window.location.href = '/page2.html';
        }else if( msg == 3 ){
            window.location.href = '/page3.html';
        }else if( msg == 4 ){
            window.location.href = '/page4.html';
        }
    }
}




function randomWholeNum(sides) {
    
    var num = Math.floor(Math.random() * sides ) + 1;
    return num;
}

















 */


//alert("this is a second alert");











//document.getElementById('anchorID').onclick=function(){/* some code */}

/* 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}
 */
//window.location.href = '...';