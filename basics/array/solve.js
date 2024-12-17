var finalPositionOfSnake = function(n, commands) {
    let x = 0,y=0;
  
  for(let i=0;i<commands.length;i++)
  {
      if(commands[i]=="DOWN"){
          y++;
      }
      if(commands[i]=="RIGHT"){
          x++;
      }
      if(commands[i]=="UP"){
          y--
      }
      if(commands[i]=="LEFT"){
          x--;
      }
  }
  return (i * n) + j;
};