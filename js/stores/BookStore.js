var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BookConstants = require('../constants/BookConstants');
var assign = require('object-assign');

var _bookList;
//Define data
function updateBookData(bookData){
	_bookList = bookData;
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var BookStore = assign({}, EventEmitter.prototype, {
	 
	getBookList: function(){
		return _bookList;
	},
	 // Emit Change event
	emitChange: function(){
		this.emit('change');
	},
	
    // Add change listener
    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
	
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  
  switch(action.actionType){
  case BookConstants.RECEIVE_DATA:
	  updateBookData(action.data);
	  break;
  default:
	  return true;
  }
  // If action was responded to, emit change event
  BookStore.emitChange();

  return true;
});

module.exports = BookStore;