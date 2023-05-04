function FruitEater() {
    var eaten = "";
    var message = "";
  
  var appleTotal = 0;
  var pearTotal=0;
  function eat(userFruit){
    eaten =userFruit.toLowerCase();
    if (eaten=="apple"){
      appleTotal++;
    }
    if (eaten=="pear"){
      pearTotal++;
    }
    else {
        message="not valid fruit";
    }
    
  }
  function applesEaten(){
    return appleTotal;
  }
  function pearsEaten(){
      return pearTotal;
  }
    
  function notValidFruit() {

      return message;
  }

  
  return{
    eat,
    applesEaten,
    pearsEaten,
    notValidFruit,
    
    
  }
}