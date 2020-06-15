$(function(){
    $("#mypic").hover(function(){
      $(this).fadeTo(100, 1)
             .css("transform", "scale(1.1, 1.1)")
    }, function(){
      $(this).fadeTo(100, 1)
             .css("transform", "scale(1,1)");
    }); 
    
  });