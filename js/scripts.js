$(document).ready(function() {
    function recycleChallenge(){
        //show next instructions
        $('.next-button').click(function(){
            var currentPage = $(this).parent().attr('id');
            var pageNum = currentPage[currentPage.length -1];
            var nextPage = parseInt(pageNum) + 1;
            var totalPages = $('.instruction-page').length;
            $('#'+ currentPage).fadeOut(400, function(){
                $('#page-'+ nextPage).fadeIn();
                if(totalPages===nextPage){
                    $('#start-button').show();
                }
            });
        });

        var numProducts = products.length;

        function shuffle(sourceArray) {
            for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
            }
            return sourceArray;
        }
        shuffle(products);
        //append products to DOM
        function appendProducts(){
            var _img = document.getElementById('id1');
            var newImg = new Image;
            newImg.onload = function() {
                _img.src = this.src;
            }
            newImg.src = 'imgs/flat/recycle_here_r.png';
        alert('repleaced');
            for (var i = 0; i < numProducts; i++) {
                $('.products ul').append('<li data-list-no="' + i + '" data-disposal="' + products[i].disposal + '" id="' + products[i].name + '"><img src="' + products[i].img + '"/></li>');
            }
        }
        appendProducts();
        
        //show next product
        function nextProduct(){
            var currentProduct = parseInt(numProducts-1);
            $('.products ul').find('[data-list-no="' + currentProduct + '"]').fadeIn();
        }
        nextProduct();

        //hide load screen, show app after list items have been appended
        function centerProducts(){
            var halfScreen = (($(window).width())/2);
            $('.products li').css('left', (halfScreen));
        }
        centerProducts();
        resizeBuildings();
        $('.loading').hide();

        //continue to app
        $('#start-button').click(function(){
            $('.instructions').hide();
            $('#app').show();
        });

        //set score to 0
        var score = 0;

        //drag/drop functionality
        $( ".products li" ).draggable({ 
            containment: "#app",
            revert: true,
            scroll: false,
            drag: function( event, ui ) {
            }
        });
        $( "#receptacles div" ).droppable({
          drop: function( event, ui ) {
            var bin_type = this.id;
            var active_product = ui.draggable;
            var disposal_type = ui.draggable[0].dataset.disposal;
            //correct answer
            if(bin_type===disposal_type){
                active_product.fadeTo(300, 0, function(){
                   $(active_product).hide();   
                });
                showScore(bin_type, 'plus');
                score = score +1;
                numProducts = numProducts -1;
                $('#receptacles div').droppable('enable').removeClass('disabled');
                nextProduct();
                //game completed function
                if(numProducts === 0){
                    if(score<0 && (score/products.length)<0.5){
                        $('.win-message').hide();
                    }
                    $('.signup-form').show();
                }
            }
            //wrong answer
            else{
                showScore(bin_type, 'minus');
                $(this).droppable('disable').addClass('disabled');
                score = score -1;
            }
            alert(score);
          }
        });

        //resize building images to fit containers
        function resizeBuildings(){
                var $skyheight = $('.sky').height();
                var newheight = parseInt($skyheight * 0.58);
                $('.buildings').css({
                    'height': newheight,
                    'max-height': '238px'
                });
                $('#guardian').css('width', (newheight * 0.54));
                $('#penobscot').css('width', (newheight * 0.3));
                $('#onedetroit').css('width', (newheight * 0.33));
                $('#rencen').css('width', (newheight * 0.78));
            }

        //score popup animation
        function showScore(bintype, plusminus){
            var $showScore = $('#' + bintype).find('.' + plusminus);
                $showScore.show().animate({
                    top: '-50px'
                }, 300, 'linear', function(){
                    $('.' + plusminus).fadeOut(300, function(){
                        $(this).css('top','0px');
                    });
                });
        }
        $(window).resize(function(){
            //adjust building size
            var $width = $(this).width();
            var $height = $(this).height();
            if(($height/$width)>0.70){
                $('#app').hide();
                $('#warning-message').show();
            }else{
                $('#app').show();
                $('#warning-message').hide();
            }
            centerProducts();
            resizeBuildings();    
        });
    }
    recycleChallenge();
    //play again
    $('#play-again').click(function(){
        $('.signup-form').hide();
        $('.loading').show();
        recycleChallenge();
    });    
});