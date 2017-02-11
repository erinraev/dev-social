angular.module('socialApp').service('mainService', function(){

  var mainUser = {};


  var CreateUser = function(name, tagline, img, bio) {
    this.name = name;
    this.tagline = tagline;
    this.img = img;
    this.bio = bio;
  };

  this.makeUser = function(name, tagline, img, bio) {
	 mainUser = new CreateUser(name, tagline, img, bio);
 }

   this.getMainUser = function() {
     return mainUser;
   }

  var profiles =
    [
      {
        'name': 'Chis Johnson',
        'tagline': 'Pretty fly for a white guy',
        'img': 'http://img.gagdaily.com/uploads/posts/fun/2013/0000be8b_big.jpg',
        'bio': 'Grew up in the suburbs of Chicago'
      },
      {
        'name': 'Gabriel Smith',
        'tagline': 'Pretty fly for a white girl',
        'img': 'https://media2.giphy.com/media/llmgz2cP4tsHK/200_s.gif',
        'bio': 'Grew up in the suburbs of Minneapolis'
      },
      {
        'name': 'Ted Jenkins',
        'tagline': 'How would you like your coffee, boss?',
        'img': 'http://www.placesamazing.com/wp-content/uploads/2014/12/Animals-Dressed-Like-Humans-10.jpg',
        'bio': 'Striving to climb the corporate ladder'
      },
      {
        'name': 'Douglas Jones',
        'tagline': 'Who needs a tagline',
        'img': 'http://img.gagdaily.com/uploads/posts/fun/2013/0000be8b_big.jpg',
        'bio': 'Likes to eat lots of tacos and recently moved to Portland'
      },
      {
        'name': 'Emma Richards',
        'tagline': 'Too basic for you',
        'img': 'http://www.placesamazing.com/wp-content/uploads/2014/12/Animals-Dressed-Like-Humans-10.jpg',
        'bio': 'Likes Uggs, Starbucks, yoga pants and dragging her boyfriend to sushi restaurants'
      }
    ];



    this.getUsers = function() {
      return profiles;
    }


});
