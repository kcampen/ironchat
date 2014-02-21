console.log('You can do it!');

var messages = new MessagesCollection();

var currentUser = {
    username: 'IronYard Student'
}

$('.msg-input').keyup(function(event) {
    if (event.keyCode == 13) {
        $('.send-msg-btn').click();
    }
});

$('.send-msg-btn').click(function() {

    if (!($('.msg-input').val() === '')) {

        var msg = new Message({

            messageText: $('.msg-input').val(),
            username: currentUser.username,
            messageDate: _.now() //had to move this out of the "defaults:" to here
        })

        var freshMessage = messages.add(msg);

        freshMessage.save()

        $('.msg-input').val('')
    }

});

//backbone docs said to use this reset:true
//upon initial page load
messages.fetch({

    reset: true,

    success: function() {
        messages.each(function(message){
         new ListView({model: message});
        })
    },

    error: function() {
      console.log('problem with initial page load fetch');
    }

});


setInterval(getNewMessages, 1000);

function getNewMessages() {
    messages.fetch({
        success: function() {
            // messages.each(function(message){
            //  new ListView({model: message});
            // })
        },

        error: function() {
            console.log('fetch failed!');
        }
    })
}

