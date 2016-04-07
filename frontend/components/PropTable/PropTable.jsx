var React = require('react/addons');

var PropTableItem = require('./PropTableItem.jsx');
var AddProperty = require('./AddPropertyForm.jsx');

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <AddProperty />
                <table>
                    <caption>Traded Properties</caption>
                    <thead>
                    <tr>
                        <th>Address</th>
                        <th>Investment Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.tradedProps.map(function(prop, idx) {
                        return (
                            <PropTableItem propTableItem={prop} key={"item" + idx}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});