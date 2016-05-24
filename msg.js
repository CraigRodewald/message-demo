var loopHandle = null;
var messagesShown =0;

// The messageSystem object is where you should do all of your work
// Use any combination of javascript, HTML and CSS that you feeling
// is appropriate
messageSystem = {
    showMessage: function(msg) {

        var DOMmessage = document.createElement('li');
        var messageText = document.createTextNode(msg);
        DOMmessage.className = "msg_box";
        DOMmessage.innerText = msg;

        document.getElementById('messages').appendChild(DOMmessage);
        $(DOMmessage).animate({right: '+=15%'}, 100).animate({right: '-=15%'}, 200).delay(3000).animate({right: '-=200%'}).fadeOut();

        $(DOMmessage).on( 'click' , function(){
          $(this).fadeOut(1000);
          messagesShown -=2;
          this.remove();
        });

        //alert(msg);
    }
};

function showMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    messageSystem.showMessage(_.sample(quotes));

}

function loop() {
    showMsg();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    loopHandle = setTimeout(loop, rand);
  //loopHandle = null;

}


$(function() {
   $('#msgButton').click(function() {
       var btn = $(this),
      btnTxt = btn.text();
       if (btnTxt === 'Start Messages') {
           btn.text('Stop Messages');
           $('.run_indicator').html( '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
           loopHandle = setTimeout(loop, 500);
       } else {
           btn.text('Start Messages');
           $('.run_indicator').hide();
           clearTimeout(loopHandle);
           loopHandle = null;
       }
   } );
});
