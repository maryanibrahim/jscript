function evenNumbers(){
   let f = 0;
   let f1 = -1;
   let f2 = 1;
   let n = 15;
   
   while (f < n) {
      f = f1 + f2;
      f1 = f2;
      f2 = f;
      
      console.log(f)
      n++;
    
   }
}

evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
