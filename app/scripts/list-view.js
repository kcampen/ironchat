var ListView = Backbone.View.extend({

	className: 'new-message',

	newTemplate: _.template($('#main-template').text()),

	initialize: function(){

		$('.message-list').append(this.el);
		this.render();
		$('.message-list').scrollTop(500000000);

	},

	render: function(){
		// console.log(this.model.attributes);
		var formattedModel = _.clone(this.model.attributes);
		// console.log(formattedModel.messageDate);
		formattedModel.messageDate = formatTime(formattedModel.messageDate);
		// console.log(formattedModel.messageDate);

		var renderedTemplate = this.newTemplate(formattedModel);


		this.$el.html(renderedTemplate);
		

	}
});

function formatTime (messageDate){
	var time = moment(messageDate).calendar();
	return time
};