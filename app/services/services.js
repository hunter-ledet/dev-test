angular.module('myApp')
  .service('playerService', function($http) {
    // ======================================
    // Maintains information from views
    // ======================================
    this.information;

    this.finishUp = function () {
      console.log(this.information);
      return this.information;
    }

    this.formatDate = function (value) {
      return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
    }

    this.maintainView1 = function ( name, nationality, gender, sport, bday ) {
      const information = {
        name,
        nationality,
        gender,
        sport,
        bday: this.formatDate(bday),
      };
      this.information = information;
    };

    this.maintainView2 = function ( team, location, description, twitter, facebook, instagram ) {
      this.information.team = team;
      this.information.location = location;
      this.information.description = description;
      this.information.twitter = twitter;
      this.information.facebook = facebook;
      this.information.instagram = instagram;
      console.log(this.information)
    }; 
    // ======================================

    // ======================================
    // DB Posts/Gets 
    // ======================================

    this.createNewPlayer = function ( playerInfo ) {
      $http.post('/addPlayer', playerInfo)
        .then(result => {
          console.log(result, 'result from post to /addPlayer');
        })
        .catch(err => console.error(err));
    };

    this.gatherStore = function () {
      return $http.get('/getPlayers')
        .then(res => {
          return res.data
        })
        .catch(err => console.error(err));
    }

  })