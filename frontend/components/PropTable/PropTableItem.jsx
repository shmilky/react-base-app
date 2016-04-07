var React = require('react/addons');

module.exports = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.propTableItem.address}</td>
                <td>{this.props.propTableItem.investmentType}</td>
            </tr>
        )
    }
});