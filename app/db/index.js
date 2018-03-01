const mongoose = require('mongoose');
mongoose.connect('mongodb://hledet:thetimeisnow@ds027479.mlab.com:27479/opensponsorship_devtest');

const playerSchema = mongoose.Schema({
  name: String,
  nationality: String,
  gender: String,
  sport: String,
  birthday: String,
  team: String,
  location: String,
  description: String,
  twitter: String,
  facebook: String,
  instagram: String,
});

const Player = mongoose.model('Player', playerSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log(`we're connected!`)
});

module.exports.Player = Player;