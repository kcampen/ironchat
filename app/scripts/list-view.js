var ListView = Backbone.View.extend({

	className: 'new-message',

	newTemplate: _.template($('#main-template').text()),

	initialize: function(){

		$('.message-list').append(this.el);

		this.render();

	},

	render: function(){

		var renderedTemplate = this.newTemplate(this.model.attributes);


		this.$el.html(renderedTemplate);
		

	}
})