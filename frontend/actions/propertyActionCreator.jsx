var dispatcher = require("./../dispatcher.js");

module.exports = {
    add:function(item){
        dispatcher.dispatch({
            type:"property-item:add",
            payload:item
        })
    },
    delete:function(item){
        dispatcher.dispatch({
            type:"property-item:delete",
            payload:item
        });
    }
};