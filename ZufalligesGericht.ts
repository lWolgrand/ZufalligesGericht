var recipes = [
    "strogonof",
    "feijoado",
    "macarrão com algo",
    "almondegas",
    "caldo verde",
    "caldo de ervilha"
  ]
  
  var weekDays = [
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
  ]
  
    function randomFood{
    const recipe = Math.floor(Math.random() * recipes.length);
    console.log(recipes[recipe]);
  
    const weekDay = Math.floor(Math.random() * weekDays.length);
    console.log(weekDays[recipe]);
  }
  
  randomFood()