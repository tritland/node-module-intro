//console.log('Module Intro');

var kittens = require('./kitties');// the './' keeps 'require' from looking at the node module file; instead makes it look at our kittens.js file; brings kitten module into our code 
var addinator = require('./addinator.js')

//log the array of kittens
//console.log(kittens.greeting);

//log "Moxy's fur color is Chocolate"
for (var i = 0; i < kittens.kittensList.length; i++) {
    console.log(kittens.kittensList[i].name + '\'s fur color is ' + kittens.kittensList[i].furColor)  
}

console.log(addinator([1, 2, 3, 4]));
console.log(addinator([1,2,3,4,5,6,7]));