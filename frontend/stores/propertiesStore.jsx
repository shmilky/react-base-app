"use strict";
var dispatcher = require("./../dispatcher.js");

function PropertiesStore(){

    var properties = [],
        changeListeners = [];

    function triggerListeners(){
        changeListeners.forEach(function(listener){
            listener(properties)	;
        })
    };

    function updateProperties(){
        properties = [{address: 'Address 1', investmentType: 'Rental Income Apartment'},
            {address: 'Address 2', investmentType: 'Flipping Property'},
            {address: 'Address 3', investmentType: 'Office Space'},
            {address: 'Address 4', investmentType: 'New Building Project'}
        ];
    }

    updateProperties();

    function removeProperty(property){
        var index = properties.findIndex(x => x._id===property._id);
        var removed = properties.splice(index,1)[0];
        triggerListeners();

        //del(`api/items/${property._id}`)
        //    .catch(()=>{
        //        groceryItems.splice(index,0,removed);
        //        triggerListeners();
        //    })
    }

    function addProperty(property){
        var i = properties.push(property);
        triggerListeners();

        //post("/api/items",item)
        //    .then((g)=>{
        //        item._id = g._id;
        //    })
        //    .catch(()=>{
        //        groceryItems.splice(i,1);
        //    })
    }

    function getProperties(){
        return properties;
    }

    function onChange(listener){
        changeListeners.push(listener);
    }

    dispatcher.register(function(event){
        var split = event.type.split(':');
        if (split[0]==='property-item'){
            switch(split[1]) {
                case "add":
                    addProperty(event.payload);
                    break;
                case "delete":
                    removeProperty(event.payload);
                    break;
            }
        }
    });


    return {
        getProperties:getProperties,
        onChange:onChange
    }
}

module.exports = new PropertiesStore();
