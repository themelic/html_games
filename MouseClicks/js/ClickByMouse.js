function goMiddle(){
    
    divDimension = document.getElementById('theBox').clientHeight; // getting Height of the block object
    imgDimension = document.getElementById('normalObj').clientHeight; //getting Height of image(obj)    
    //Setting margin-top value to move image Y cooridnates
    document.getElementById('normalObj').style.marginTop = ((divDimension/2)-(imgDimension/2))+'px';
    
    divDimension = document.getElementById('theBox').clientWidth; // getting width of the block object
    imgDimension = document.getElementById('normalObj').clientWidth; //getting width of image(obj)
    //Setting margin-left value to move image x cooridnates
    document.getElementById('normalObj').style.marginLeft = ((divDimension/2)-(imgDimension/2))+'px';
    //Update coordinates by middle button and we use a little cheat :D
    document.getElementById('xPos').innerHTML=" X Coords: " + (document.getElementById('progValue').innerHTML/2);
    document.getElementById('yPos').innerHTML=" Y Coords: 100";
}



function changeProg(){
    //we add listener for click to progressBar
    document.getElementById('progressBar').addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft; //assign value of pointer from left
    //var y = e.pageY - this.offsetTop; //assign value of pointer from top
    var clickedValue = Math.ceil(x * this.max / this.offsetWidth); //assign width value and round 
    clickedValue = clickedValue -(clickedValue%10)+10; // Progresbar decrease or increase steps by 10
    document.getElementById('progressBar').value=clickedValue; //change the value of progress bar 

    document.getElementById('theBox').setAttribute("style","width:"+clickedValue+"px");//set width of the box
    document.getElementById('progValue').innerHTML=clickedValue;//show prgress value
    
    // we want to be sure that Cross is inside the box
    var chkP = document.getElementById('normalObj').offsetLeft; 
    if(clickedValue<chkP){
        //change the image position when border width less than image
        document.getElementById('normalObj').style.marginLeft = ((clickedValue)-16)+'px';
        document.getElementById('xPos').innerHTML="Changed by Progress Bar";
        document.getElementById('yPos').innerHTML="Changed by Progress Bar";
    }

    });
}

function clickPosition(){
    // we listen if there is a click on theBox
    document.getElementById('theBox').addEventListener('click', function (e) {
    
    //declaring x and y coordinate values of object where  we clicked
    var x = Math.ceil(event.clientX-this.offsetLeft) ;//round values for x coords
    var y = Math.ceil(event.clientY-this.offsetTop) ;//wound values for y coords
    var xcoords = " X Coords: " + (x-10); 
    var ycoords = " Y Coords: " + (y-10);

    document.getElementById('xPos').innerHTML=xcoords;// show clicked coords in theBox
    document.getElementById('yPos').innerHTML=ycoords;// show clicked coords in theBox
    //moving image to clicked exact coordinates
    document.getElementById('normalObj').style.marginTop = ((y-26))+'px'; // setting y coordinate
    document.getElementById('normalObj').style.marginLeft = ((x-26))+'px'; // setting x coordinate

    });
}
