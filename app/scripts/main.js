console.log('You can do it!');

var messages = new MessagesCollection();

var messageTest = {
  username: 'Todd',
  messageText: 'this is our first message. the Dream team wins!',
}


var messageModel = new Message(messageTest);

console.log('this is the messageTest: ', messageTest);
console.log('This is the messageModel: ', messageModel);

messageModel = messages.add(messageModel);
console.log(messageModel);
messageModel.save();
