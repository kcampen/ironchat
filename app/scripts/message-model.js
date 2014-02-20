var Message = Backbone.Model.extend({
  //does this need to specify id

  defaults: {
    "options": {},
    "username": '',
    "messageText": 'yo',
    "messageDate": _.now(),
    "appId": "ironchat"
  },
})

var MessagesCollection = Backbone.Collection.extend({
  model: Message,

  url: "http://tiny-pizza-server.herokuapp.com/collections/messages"

})