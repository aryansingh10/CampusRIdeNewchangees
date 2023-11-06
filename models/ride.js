const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  },
  pickupLocation: String,  
  time: String,    
  destination: String,   
  date: Date,           
 

});

module.exports = mongoose.model('Ride', rideSchema);
