const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
name: {
    type: String,
    required: true
},
StartDate: {
    type: Date,
},
EndDate: {
    type: Date,
},
Speakers:{
   type: Array
},
Ticket: {
    type: Number,
}
});

const event = mongoose.model('Event',eventSchema);
module.exports = event