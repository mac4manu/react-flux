var React = require('react');
var FluxBookList = require('./FluxBookList.react');

var BookAPI = require('../utils/BookAPI');
var BookStore = require('../stores/BookStore');

function getDataFromStore(){
	return {
		bookData: BookStore.getBookList()
	};
}
var FluxMainComponent = React.createClass({

	getInitialState: function(){		
		return {"books":[]};
	},
	componentWillMount: function(){
		BookAPI.getBookData();
	},
	// Add change listeners to stores
    componentDidMount: function() {	  
      BookStore.addChangeListener(this._onChange);
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
      BookStore.removeChangeListener(this._onChange);
    },
	componentWillReceiveProps: function(newProps){
        this.setState({
			"books":newProps
  	  });
	},
	render: function(){
		return(<div className="container">
		<input type="search" onBlur={this._triggerSearch} placeholder="Search book..."/>
		<FluxBookList books={this.state.books} /></div>);
	},
	_triggerSearch: function(event){
		BookAPI.getBookData(event.target.value);
	},
    // Method to setState based upon Store changes
    _onChange: function() {	  
      this.setState({
		  "books":getDataFromStore()
	  });
    }
});

module.exports = FluxMainComponent;