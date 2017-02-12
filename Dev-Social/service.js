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
        'img': 'http://static.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-35-57d65d0b20586__880.jpg',
        'bio': 'Work for Goldman Sachs. Recently started making money and I can constantly be heard saying, "Young money, cash money." Like to impress girls with my fancy cars and suave style.'
      },
      {
        'name': 'Gabriel Smith',
        'tagline': 'Pretty fly for a white girl',
        'img': 'http://static.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-31-57d65cdee96c1__880.jpg',
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
        'img': 'http://mymodernmet.com/wp/wp-content/uploads/archive/99xUk5rFxULi4uxzkfZa_1082118183.jpeg',
        'bio': 'Likes to eat lots of tacos and recently moved to Portland'
      },
      {
        'name': 'Emma Richards',
        'tagline': 'Too basic for you',
        'img': 'http://static.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-55-57d65d360deca__880.jpg',
        'bio': 'Likes Uggs, Starbucks, yoga pants and dragging her boyfriend to sushi restaurants'
      },
      {
        'name': 'Emma Richards',
        'tagline': 'Too basic for you',
        'img': 'http://www.placesamazing.com/wp-content/uploads/2014/12/Animals-Dressed-Like-Humans-12.jpg',
        'bio': 'Likes Uggs, Starbucks, yoga pants and dragging her boyfriend to sushi restaurants'
      }
    ];



    this.getUsers = function() {
      return profiles;
    }


});
