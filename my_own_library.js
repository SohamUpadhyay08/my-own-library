function isTouching(movingrect,fixedrect){
    if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
      &&fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
      && movingrect.y - fixedrect.y< movingrect.height/2 + fixedrect.height/2
      && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
      return true;
    }
    else{
      return false;
    }
  }