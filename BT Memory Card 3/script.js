var cards = ['f1','f2','f3','f4','f5','f1','f2','f3','f4','f5'];
var current = null;
var count = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

function flip(card){
    $(card).toggleClass('flipped');
    $(card).css('pointer-events', 'none');
    
    if (!current) {
        current = $(card);    
    } else {
        $('.card').css('pointer-events', 'none');
        if (current.attr('data-name') != $(card).attr('data-name')) {
            $('#wrong').prop('volume', 0.01);
            $('#wrong')[0].play()
            setTimeout(function(){
                current.toggleClass('flipped');
                $(card).toggleClass('flipped');
                current = null;
                $('.card').css('pointer-events', 'auto');
            },500);
        } else {
            $('#right')[0].play();
            setTimeout(function(){                             
                current.css('opacity','0');
                $(card).css('opacity','0');
                $('.card').css('pointer-events', 'auto');
                count++;
                if(count == 5){
                    window.location.href="win.html";    
                }
            current = null;
            },500);
        }
    }
}


function startGame(){
    $('.timer').html('<h1>You will lose in <span id="countdown">30 </span> Seconds</h1>')
    $('.popup').hide();
    cards = shuffle(cards);

    var html='';
    for (var i=0;i<cards.length;i++){
        html+='<div class="card" data-name="' + cards[i] + '" onclick = "flip(this)">' + 
        '<img class="back" src="img/back.jpg"/>' + 
        '<img class="front" src="img/' + cards[i] + '.jpg"/></div>';
    }
    $('.wrap').html(html);

    var remainingTime = 30;
    var run = setInterval(function(){
    remainingTime--;
    $('#countdown').html(remainingTime);
    if(remainingTime == 0){
    clearInterval(run);
    lose();
    
}
},1000)
    
}

function lose() {
    $('.message').find('h1').html('You lost. Please try again next time');
    $('.message').find('button').html('Play again');    
    $('.popup').show();
    $('#lose')[0].play();
}