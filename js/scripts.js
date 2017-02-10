$(document).ready(function() {
    var numProducts = products.length;
    for (var i = numProducts - 1; i >= 0; i--) {
        if($('.products .first ul li').length<7){
            $('.products .first ul').append('<li data-disposal="' + products[i].disposal + '"><img src="' + products[i].img + '"/></li>');
        }
        else{
            $('.products .second ul').append('<li data-disposal="' + products[i].disposal + '"><img src="' + products[i].img + '"/></li>');
        }
    }
    $('.loading').hide();
    $('#app').show();
    $( ".products li" ).draggable({ 
        revert: true 
    });
    var score = 0;
    var count = 
    $( "#receptacles li" ).droppable({
      drop: function( event, ui ) {
        var bin_type = this.id;
        var active_product = ui.draggable;
        var product_type = active_product.attr('data-disposal');
            //correct answer
        if(bin_type===product_type){
            active_product.fadeTo(300, 0, function(){
               $(active_product).css("visibility", "hidden");   
            });
            score = score +1;
            numProducts = numProducts -1;
            updateScore();
            //game completed function
            if(numProducts === 0){
                alert('You Win!');
                $('.signup-form').show();
            }
        }
        //wrong answer
        else{
            score = score -1;
            updateScore();
        }
      }
    });
    function updateScore(){
        $('.score span').text(score);
    }
});