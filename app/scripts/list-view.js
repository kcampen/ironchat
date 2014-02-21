var ListView = Backbone.View.extend({

	className: 'new-message',

	newTemplate: _.template($('#main-template').text()),

	initialize: function(){

		$('.message-list').append(this.el);

		this.render();

	},

	render: function(){
		console.log(this.model.attributes);
		var formattedModel = this.model.attributes;
		console.log(formattedModel.messageDate);
		formattedModel.messageDate = formatTime(formattedModel.messageDate);
		console.log(formattedModel.messageDate);

		var renderedTemplate = this.newTemplate(formattedModel);


		this.$el.html(renderedTemplate);
		

	}
});

function formatTime (messageDate){
	var time = moment(messageDate).calendar();
	return time
};