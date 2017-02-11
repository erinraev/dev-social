angular.module('socialApp').service('myService', function(){

  var CreateProfile = function(name, tagline, img, bio) {
    this.name = name;
    this.tagline = tagline;
    this.img = img;
    this.bio = bio;
  };

  var profiles =
    {
      '0': new CreateProfile('Chis Johnson', 'Pretty fly for a white guy', 'http://img.gagdaily.com/uploads/posts/fun/2013/0000be8b_big.jpg', 'Grew up in the suburbs of Chicago'),
      '1': new CreateProfile('Gabriel Smith', 'Pretty fly for a white girl', '', 'Grew up in the suburbs of Minneapolis'),
      '2': new CreateProfile('Gabriel Smith', 'Pretty fly for a white girl', '', 'Grew up in the suburbs of Minneapolis'),
      '3': new CreateProfile('Gabriel Smith', 'Pretty fly for a white girl', '', 'Grew up in the suburbs of Minneapolis'),
      '4': new CreateProfile('Gabriel Smith', 'Pretty fly for a white girl', '', 'Grew up in the suburbs of Minneapolis'),
      '5': new CreateProfile('Gabriel Smith', 'Pretty fly for a white girl', '', 'Grew up in the suburbs of Minneapolis')
    }



});
