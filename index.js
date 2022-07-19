let cats = ["Milo", "Otis", "Garfield"];
cats;

//Destructive Append
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat("Ralph");



//Destructive Prepend
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

//Destructive remove last cat
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat(){
    return cats.pop()
}

//Destructive remove first cat
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyRemoveFirstCat(){
    cats.shift();
}

//Nondestructive add cat
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
appendCat = [];
function appendCat(name){
   return appendCat = [...cats,name]
}
appendCat("Broom");

//Nondestrutive prepend cat
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
prependCat = [];
function prependCat(name){
    return prependCat = [name, ...cats];
}
prependCat("Arnold");

//Nondestructive last removal
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat(){
    return removeLastCat = cats.slice(0,2);
}
//Nondestructive first removal
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(){
      return removeFirstCat = cats.slice(1,3);
  }