
$().ready(function(){

  //set email to contact button href - do it this way to try to avoid crawler spam
  
  var base64 = 'dDFnZW1pbmlAeWFuZGV4LnJ1';

  setTimeout(function(){
    $('#con'+'tact').attr('href','mail'+'to:'+atob(base64));
  },1000);

});
