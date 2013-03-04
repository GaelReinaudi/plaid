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
			var Speed = 50;
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

	Template.panel.rendered = function () {
		console.log("Template.panel.rendered called");
		
	};
	
/*  Meteor.startup(function () {
	  $(window).resize();
  });
  
  $(window).resize(function() {
	  var viewWidth = window.innerWidth * 0.95;
	  var titleWidth = $("#theTitle").width();
	  var currentFontSize = parseFloat($("#theTitle").css('font-size'));
	  var newFontsize = currentFontSize * viewWidth / titleWidth;
	  console.log("titleWidth=" + titleWidth + ", viewWidth=" + viewWidth, ", font=" + currentFontSize);
	  console.log("newFont=" + newFontsize);
	  $("#theTitle").css({fontSize: newFontsize});
  });*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
