var React = require('react/addons');

var propertyAction = require('./../../actions/propertyActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            addressInput:'',
            investmentTypeInput:''
        }
    },
    addProperty: function(e){
        e.preventDefault();

        propertyAction.add({
            address:	this.state.addressInput,
            investmentType:	this.state.investmentTypeInput,
        });

        this.setState({
            addressInput:'',
            investmentTypeInput:''
        })
    },
    handleInputAddress: function(e){
        this.setState({addressInput : e.target.value})
    },
    handleInputInvestmentType: function(e){
        this.setState({investmentTypeInput : e.target.value})
    },
    render: function () {
        return (
            <div className='add-property-form'>
                <form onSubmit={this.addProperty}>
                    <input name='address' type="text" required value={this.state.addressInput} onChange={this.handleInputAddress}/>
                    <input name='investmentType' type="text" required value={this.state.investmentTypeInput} onChange={this.handleInputInvestmentType}/>
                    <button> Add New Property </button>
                </form>
            </div>
        )
    }
});