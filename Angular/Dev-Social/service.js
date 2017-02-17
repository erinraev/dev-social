angular.module('socialApp').service('mainService', function(){

  var mainUser = {};


  var CreateUser = function(newUser) {
    this.name = newUser.name;
    this.tagline = newUser.tagline;
    this.img = newUser.img;
    this.bio = newUser.bio;
  };

  this.makeUser = function(user) {
   console.log('user on service', user)
	 mainUser = new CreateUser(user);
   return mainUser;
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
        'bio': 'I only buy designer clothes and I\'m on the hunt for a sugar daddy... albeit a young sugar daddy, because I\'m also a cougar.. cheetah.. cheetah cougar.'
      },
      {
        'name': 'Ted Jenkins',
        'tagline': 'How would you like your coffee, boss?',
        'img': 'http://www.placesamazing.com/wp-content/uploads/2014/12/Animals-Dressed-Like-Humans-10.jpg',
        'bio': 'I don\'t have much to say about myself. I commute to work in an old Honda, and I like to kick back with some Bud Light.'
      },
      {
        'name': 'Douglas Jones',
        'tagline': 'Who needs a tagline',
        'img': 'http://mymodernmet.com/wp/wp-content/uploads/archive/99xUk5rFxULi4uxzkfZa_1082118183.jpeg',
        'bio': 'I Like to eat lots of tacos and recently moved to Portland'
      },
      {
        'name': 'Emma Richards',
        'tagline': 'Too basic for you',
        'img': 'http://static.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-55-57d65d360deca__880.jpg',
        'bio': 'Likes Uggs, Starbucks, yoga pants and dragging her boyfriend to sushi restaurants'
      },
      {
        'name': 'Edward Weaselton',
        'tagline': 'Hemingway is my Hero',
        'img': 'http://www.placesamazing.com/wp-content/uploads/2014/12/Animals-Dressed-Like-Humans-12.jpg',
        'bio': 'I like to visit art museums and drink yerba matte. I\'ve worn this scarf for 3 years and have never washed it. I listened to that album before it became popular.'
      }
    ];



    this.getUsers = function() {
      return profiles;
    }


});
