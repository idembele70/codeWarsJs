function filter_list(l=[1,2,'a','b']){
   return l.filter(function (v) {
       return typeof v !== 'string';
   });
  }

  console.log(filter_list());
