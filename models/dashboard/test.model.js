const mongooose = require('mongoose');

const testmodel = mongooose.Schema({
    name:{
        type:String,
        require:[true, 'name field is required']
    },
    age:{
        type:Number,
    }
},{
    timestamps:true
});

module.exports = mongooose.model('test',testmodel);