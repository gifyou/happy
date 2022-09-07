
var formUrl = 'form.html';

$(window).on('load', function(){
  $.get(formUrl, function(res){
     $('#container').append($(res));
  })
})