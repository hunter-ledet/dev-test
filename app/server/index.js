const express = require('express');
const bodyParser = require('body-parser');
const items = require('../db');

const Player = items.Player;

const app = express();
const PORT = process.env.PORT || 9400;
const jsonParser = bodyParser.json();



app.use(express.static(`app`));

app.post('/addPlayer', jsonParser, (req, res) => {
  console.log(req.body, 'req.body from post /addPlayer')
  const player = req.body;
  const newPlayer = new Player({ 
    name: player.name,
    nationality: player.nationality,
    gender: player.gender,
    sport: player.sport,
    birthday: player.bday,
    team: player.team,
    location: player.location,
    description: player.description,
    twitter: player.twitter,
    facebook: player.facebook,
    instagram: player.instagram,
   })

   newPlayer.save((err, newPlayer) => {
    err ? console.error(err) : res.status(201).send(newPlayer);
   })
});

app.get('/getPlayers', (req, res) => {
  Player.find((err, players) => {
    err ? console.error(err) : res.status(200).send(players);
  })
})





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});