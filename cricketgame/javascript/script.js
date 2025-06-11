let compChoice;
function generateComputerChoice () {
     let randomNo = Math.random() * 3;
      compChoice ;
    if( randomNo > 0 && randomNo <=1){
    compChoice = 'Bat';
    //console.log('computer choice is '+compChoice);
    }
    else if (randomNo > 1 && randomNo <= 2){
    compChoice ='Ball';
      //  console.log('computer choice is '+compChoice);
    }
    else { 
        compChoice= 'Stump';
      //  console.log('computer choice is '+compChoice);
    } 
}
