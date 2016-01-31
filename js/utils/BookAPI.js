var $ = require('jquery');
var BookActions = require('../actions/BookActions');

module.exports = {
   getBookData: function(query){
	   debugger;
	   var searchKey = query?query:"apj";
        $.getJSON("https://www.googleapis.com/books/v1/volumes?q="+searchKey).then(function success(data){ 
			var items = data.items;
			BookActions.receiveBookData(items);
		});
    }

};
