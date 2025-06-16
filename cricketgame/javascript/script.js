let compChoice;
function generateComputerChoice() {
     let randomNo = Math.random() * 3;
      //compChoice ;
    if( randomNo > 0 && randomNo <=1){
    return compChoice = 'Bat';
    //console.log('computer choice is '+compChoice);
    }
    else if (randomNo > 1 && randomNo <= 2){
    return compChoice ='Ball';
      //  console.log('computer choice is '+compChoice);
    }
    else { 
      return  compChoice= 'Stump';
      //  console.log('computer choice is '+compChoice);
    } 
}

function getResult(userMove, compMove ){
  if(userMove ==='Bat'){
    if(compMove ==='Bat'){
      return  'It`s a Tie';
    }

    else if(compMove === 'Ball'){
      return 'User Won.';
    }

    else{
      return 'Computer Won.';
    }
  }

  else if(userMove === 'Ball'){
    if(compChoice === 'Ball'){
      return 'It`s a Tie.';
    }

    else if(compMove === 'Bat'){
      return 'Computer Won.';
    }

    else{
      return 'User Won.';
    }

  }
  else if(userMove === 'Stump'){
    if(compChoice === 'Ball'){
      return 'Computer Won.';
    }

    else if(compMove === 'Bat'){
      return 'User Won.';
    }

    else {
      return 'It`s a Tie';
    }
    }
  
}