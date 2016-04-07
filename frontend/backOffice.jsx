var React = require('react/addons');

console.log('backOffice.jsx: Hello World');

var OnMarketPropTable = require('./components/PropTable/PropTable.jsx');
var PropertiesStore = require('./stores/propertiesStore.jsx');

var tradedProps = PropertiesStore.getProperties();

function render() {
    React.render(<OnMarketPropTable tradedProps={tradedProps}/>, mainPageTop);
}

PropertiesStore.onChange(function(properties) {
    tradedProps = properties;
    render();
});

render();

