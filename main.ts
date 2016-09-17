


function Tree(x: number){
   var i : number = 0;
   var j : number = 0; 
   var tree : string[][] = new Array();
   for(j = 0 ; j < x ; j++){

       for(i = 0 ; i < x ; i++ ){

           if( i <= x - 1 + j || i >= x - 1 - j)
              tree[i][j] = "*";
       else
            tree[i][j] = " ";
   }

  }

  for(j = 0 ; j < x ; j++ ){

      for(i = 0 ; i < x ; i++ ){
          console.log(tree[i][j]);
      }

  }

}