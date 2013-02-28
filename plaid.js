Panels = new Meteor.Collection('panels');

if (Meteor.isClient) {
	
	Template.panels.panels = function() {
		return Panels.find({}, {})
	}

	Template.hello.events({
		'click input' : function () {
			// template data, if any, is available in 'this'
			if (typeof console !== 'undefined')
				console.log("You pressed the button!");
			Panels.insert({name: "ffffffff", x: 240, y: 240});
			} 
	});
	
	Template.panel.events({
		'mousemove' : function () {
			// template data, if any, is available in 'this'
			if (typeof console !== 'undefined')
				console.log("You moved over the div:" + this._id);
			var Speed = 10;
			var randX = (Math.random() - 0.48) * Speed * 2;
			var randY = (Math.random() - 0.48) * Speed * 2;
			Panels.update({_id: this._id}, {$inc: {x: randX}});
			Panels.update({_id: this._id}, {$inc: {y: randY}});			
			},
		'click div' : function () {
			if (typeof console !== 'undefined')
				console.log("You clicked the div:" + this._id);
			Panels.remove({_id: this._id});
		}
		
	});
	
	
  Template.theTitle.greeting = function () {
	window.innerWidth;
    return "plaid" + " " + window.innerWidth;
  };


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
