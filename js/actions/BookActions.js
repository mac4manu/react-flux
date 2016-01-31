var AppDispatcher = require('../dispatcher/AppDispatcher');
var BookConstants = require('../constants/BookConstants');

//Define Action methods
var BookActions = {
	//Receive initial data
	receiveBookData: function(data){
			AppDispatcher.handleAction({
				actionType: BookConstants.RECEIVE_DATA,
				data:data
			})
	}
}
module.exports = BookActions;
