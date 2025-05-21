const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    } else {
      console.log('error!')
    }
  }
  
  const getComputerChoice = () => {
    let integer = Math.floor(Math.random() * 3)
    if (integer === 0){
      return 'rock'
    } else if(integer === 1){
      return 'paper'
    } else if(integer === 2){
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'game was a tie'
    }
  
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'computer won'
      } else {
        return 'user won'
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'computer win'
      } else if(computerChoice === 'rock'){
        return 'user win'
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'computer win'
      } else if(computerChoice === 'paper'){
        return 'user win'
      }
    }
  }
  
  
  const playGame = () => {
    let userChoice = getUserChoice()
    let computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)
    determineWinner(userChoice, computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();
  