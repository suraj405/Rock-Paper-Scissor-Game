function calculateMoney(){
  const inputElemnt = document.querySelector('.js-calculator');
  console.log(inputElemnt.value);

 }







 //this is simple way to refresh site without any saved state loss
 let score = JSON.parse(localStorage.getItem('score')) ||{
     wins:0,
     Lose:0,
     Tie:0
   };
 
 /* it is optional code for reresh
 if(score === null){
   score = {
     wins:0,
     Lose:0,
     Tie:0
   };
 }
 */
document.querySelector('.js-score')
 .innerHTML = `wins:${score.wins},Lose:${score.Lose},Tie:${score.Tie}`;

 function playGame(playerMove){

   const computerMove = pickComputerMove();
   

   let result = '';

   if(playerMove === 'Scissors'){
     if(computerMove === 'Rock'){
       result = 'You Lose.';
       
     }
     else if(computerMove === 'Scissors'){
       result = 'Tie.';
     }
     else if(computerMove === 'Paper'){
       result = 'You Won.';
     }


   }else if(playerMove === 'Paper'){

     if(computerMove === 'Rock'){
       result = 'You Won.';
       
     }
     else if(computerMove === 'Scissors'){
       result = 'You Lose.';
     }
     else if(computerMove === 'Paper'){
       result = 'Tie.';
     }


   }else if(playerMove === 'Rock'){

     if(computerMove === 'Rock'){
       result = 'Tie.';
       
     }
     else if(computerMove === 'Scissors'){
       result = 'You Won.';
     }
     else if(computerMove === 'Paper'){
       result = 'You Lose.';
     }
   }

   if(result === 'You Won.'){
     score.wins+=1;
   }else if(result === 'You Lose.'){
     score.Lose+=1;
   }else if(result === 'Tie.'){
     score.Tie+=1;
   } 
   

   

   document.querySelector('.js-result')
     .innerHTML = result;

   
   document.querySelector('.js-move')
   .innerHTML = `You <img src="images/${playerMove}.png" class="image-height">
   <img src="images/${computerMove}.png" class="image-height">Computer`;

   updatescore();
   

 
     

 }

 function pickComputerMove(){
   const RandomNumber = Math.random();
   let computerMove = '';

   if(RandomNumber>=0 && RandomNumber<1/3 )
   {
     computerMove = 'Rock' ;
   }
   else if( RandomNumber>=1/3 && RandomNumber<2/3){

     computerMove='Paper';
   }
   else if(RandomNumber >=2/3 && RandomNumber<1){
     computerMove='Scissors';
   }
   return computerMove;
 }

 /*
 function showScore(){
   alert(`The score of playerMove
wins:${score.wins},lose:${score.Lose}Tie:${score.Tie}
 
   `);
 }
 */
 function showScore1(){
   (`The score has been Reseted
wins:${score.wins},lose:${score.Lose}Tie:${score.Tie}
   `);
 }
 function score10(){
   score.wins=0;
score.Lose=0;
score.Tie=0;
localStorage.removeItem('score');
showScore1();
updatescore();
 }



 function updatescore(){
   localStorage.setItem('score',JSON.stringify(score));
   //to show score and update    
       document.querySelector('.js-score')
       .innerHTML = `wins:${score.wins},Lose:${score.Lose},Tie:${score.Tie}`;
 }

 