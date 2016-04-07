var React = require('react/addons');

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <div className="top-menu-item"><a href="#">Login</a></div>
                <div className="top-menu-item"><a href="#">Register</a></div>
                <div className="top-menu-item"><a href="#">Affiliate</a></div>
                <div className="top-menu-item"><a href="#">About Us</a></div>
                <div className="top-menu-item"><a href="#">Contact Us</a></div>
            </div>
        )
    }
});