var React = require('react');


// Define main Controller View
var FluxBookList = React.createClass({
	render: function(){
		var bookData = [];
		if(this.props.books && this.props.books.length===0){
			bookData.push("Loading....");
		}else{
			bookData = this.props.books.bookData.map(function(item){
				return(<div className="tile_container"><img className="tile" src={item.volumeInfo.imageLinks.thumbnail}/>
				<h4 className="tile">{item.volumeInfo.title}</h4>
				<div className="sub__info">
				<p>Author: {item.volumeInfo.authors.join(",")}</p>
				<p>Average rating : {item.volumeInfo.averageRating}</p>
				<p>Ratings count : {item.volumeInfo.ratingsCount}</p>
				</div>
				</div>);
			});
		}	
		return(<div>{bookData}</div>);
	}    
});

module.exports = FluxBookList;