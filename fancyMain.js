function printInOrder(arr){
    
    for(var i = 0; i < arr.length; i++){
       
      console.log(i + " -> " + arr[i]);
    }
  }
  
  var names = ['James', 'Jill', 'Jane','Jack'];
  printInOrder(names);