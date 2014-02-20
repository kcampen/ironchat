console.log('You can do it!');

var messages = new MessagesCollection();

var messageTest = {
  username: 'Todd',
  messageText: 'this is our first message. the Dream team wins!',
}

var currentUser = {
	username: 'IronYard Student'
}

var messageModel = new Message(messageTest);

console.log('this is the messageTest: ', messageTest);
console.log('This is the messageModel: ', messageModel);

messageModel = messages.add(messageModel);
console.log(messageModel);

// messageModel.save();


$('.send-msg-btn').click(function(){

	if (!($('.msg-input').val() === '')){  

		var msg = new Message ({

			messageText: $('.msg-input').val(),
			username: currentUser.username
		})

		var freshMessage = messages.add(msg);

		freshMessage.save()
	}

});

messages.fetch({
	success: function(){
		messages.comparator()
		messages.each(function(){
			new ListView({model: message});
		})
	}
})

	

