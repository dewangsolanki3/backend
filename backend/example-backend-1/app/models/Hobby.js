const mongoose = require('mongoose');

const HobbySchema = new mongoose.Schema({
    user : {
        type : 'ObjectId',
        ref: 'User',
        required : true ,
    },
    locationname : {
        dancing :{ 
            type: Boolean ,
            default: false 
        },
        singing :{ 
            type: Boolean ,
            default: false 
        },
        painting :{ 
            type: Boolean ,
            default: false 
        },
        clubing :{ 
            type: Boolean ,
            default: false 
        },
        swimming :{ 
            type: Boolean ,
            default: false 
        },
        movies :{ 
            type: Boolean ,
            default: false 
        },
        reading :{ 
            type: Boolean ,
            default: false 
        },
        programming :{ 
            type: Boolean ,
            default: false 
        },
        cooking :{ 
            type: Boolean ,
            default: false 
        },
        
    }
        
});

const model = mongoose.model('Hobby', HobbySchema);
module.exports = model;