

function Tree (x: number) :void {
   var i : number = 0;
   var j : number = 0; 
   var floor : string = "";
   for( j = 0 ; j < x ; j++){
       floor = "";
       for(i = 0 ; i < x * 2 - 1 ; i++ ){
           if( i < x - 1 - j)
              floor += " ";
           if( i >= x - 1 - j && i <= x + j - 1 )
              floor += "*";
       }
       console.log(floor);
   }
  
}


Tree(4);