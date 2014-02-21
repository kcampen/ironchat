var Message = Backbone.Model.extend({
  //does this need to specify id?
  //YES! it needed the idAttriute specified or 
  //else everytime i tried to fetch, the success method 
  //thought that the entire array was new and the add
  //event was called for every new message
  //and they were all getting added over and over again every time!


  //well the success method of .fetch() seems to always receive the entire array
  //maybe the add event will work

  idAttribute: '_id',

  defaults: {
    "options": {},
    "username": '',
    "messageText": 'yo',
    // "messageDate": _.now(),
    "appId": "ironchat"
  },

  initialize: function(){
    // console.log('new model initialized');
  }

})

var MessagesCollection = Backbone.Collection.extend({
  model: Message,

  url: "http://tiny-pizza-server.herokuapp.com/collections/messages",

  comparator: 'messageDate',

  initialize: function() {
    console.log('initializing collection');
    this.listenTo(this, "change", function(triggeringItems){
      // console.log('collection heard "CHANGE" event fired on itself:   ', triggeringItems);

    } );

    this.listenTo(this, "add", function(newMessage){
      // console.log('collection heard "ADD" event fired on itself', newMessage);

      // maybe this is where the javascript that causes the window to scroll to the bottom can happen
      new ListView({ model: newMessage });

    } );
  }, 

  //this little peice of magic is filtering out the bad messages
  //i don't know if this is the best way but it is working like a charm!
  parse: function(response){
    console.log('entered parse method!');
    return _.filter(response, function(message){
        return (
          _.isNumber(message.messageDate)
          && message.username != ''
          );
    })
  }

})