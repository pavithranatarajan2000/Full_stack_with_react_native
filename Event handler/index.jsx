var product=React.createClass({

getInitialState:function(){

return {qty:0};

},

buy: function(){

this.setState({qty: this.state.qty+1});

},

show: function(){

this.props.handleShow(this.props.name);

},

render: function() {

return (

<div>

<p>{this.props.name}- ${this.props.price}</p>

<button onClick={this.buy}>Buy</button>

<button onClick={this.show}>Show</button>

<h3>Qty:{this.state.qty} item(s)</h3>

</div>

);

}

});

var Total=React.craeteClass({

render: function() {

return(

<div>

<h3>Total Price</h3>

</div>

};

}

});

var ProductList=React.createClass({

showProduct: function(name){

alert("You Selected "+name);

},

Render: function(){

return(

<div>

<Product name=”Android” price=”121”

handleShow={this.showProduct}/>

<Product name=”apple” price=”200”

handleShow={this.showProduct}/>

<Total/>

</div>

);

}});
