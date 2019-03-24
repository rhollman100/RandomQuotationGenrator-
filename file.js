// variables
var beginning = ['Every day','Every once in a while', 'On the weekend','Every morning','Usually'];
var middle = [' I think about', ' Sam talks about', ' my friends say they are excited about', ' I talk about',' I plan ahead for']; 
var end = [' the summer holidays', ' the party next week', ' what I want to do in the future',' Christmas',' Graduation Day']; 

var spanbeginning = ['Yo quiero','Mi amigo quiere', 'Creo que voy a','Este fin de semana mi familia vamos a','El año que viene voy'];
var spanmiddle = [' ir', ' venir', ' relajar', ' comer la cena',' desayunar']; 
var spanend = [' a la playa', ' en mi casa', ' en las campañas',' al lado del lago',' en las montañas']; 

//random select from arrays

function newQuote() {
 var i = 0;
 var randVal = Math.floor(Math.random()*5);
    
    while (i <= document.getElementById("selectValue").value && document.getElementById("selectLang").value === 'Eng'){
    document.getElementById("quotes").innerHTML = "'" + beginning[randVal] + middle[randVal] + end[randVal] + "'";
    i++;
    }
    
    while (i <= document.getElementById("selectValue").value && document.getElementById("selectLang").value === 'Span'){
    document.getElementById("quotes").innerHTML = "'" + spanbeginning[randVal] + spanmiddle[randVal] + spanend[randVal] + "'";
    i++;
    }
    
    /* if(documents.getElementById("selectValue").value > 1){
var randVal = Math.floor(Math.random()*1);
document.getElementById("quoteone").innerHTML = "'" + beginning[randVal] + middle[randVal] + end[randVal] + "'";
  } 
      
  if (document.getElementById("selectValue").value > 2){
var randValTwo = Math.floor(Math.random()*2);
document.getElementById("quotetwo").innerHTML = "'" + beginning[randValTwo] + middle[randValTwo] + end[randValTwo] + "'";
  } 
    
  if(document.getElementById("selectValue").value > 3){
var randValThree = Math.floor(Math.random()*3);
document.getElementById("quotethree").innerHTML = "'" + beginning[randValThree] + middle[randValThree] + end[randValThree] + "'";
  }  
  
  if(document.getElementById("selectValue").value > 4){
var randValFour = Math.floor(Math.random()*4);
document.getElementById("quotefour").innerHTML = "'" + beginning[randValFour] + middle[randValFour] + end[randValFour] + "'";
  }  
  
  else {
      var randValFive = Math.floor(Math.random()*5);
document.getElementById("quotefive").innerHTML = "'" + beginning[randValFive] + middle[randValFive] + end[randValFive] + "'";
  } */
};

//leave button close window
function leaveProgram() {
 document.getElementById("mainBox").style.display="none";
 document.getElementById("closeBox").style.display="block"; 
};