/*
JSET.js
A group of unique values, hashed for speed and convenience. This allows for easy set operations, like Intersection.
Using a set is a little more complicated than an array, but it helps ensure the invariants are respected.

There is a tradeoff for speed using this design, though I have not tested how much speed.

The underlying structure looks like this:

    set: {
        "1": 1
        "2" : 2
    }

As you can see, every hash has a value of itself. This is redundent, I wonder if I could get away with:

    set : {
        "1": 1,
        "2": 1,
    }

In principle, this is less memory...
 */

function Set(){
    var set;
    set = {};
    $.each(arguments, function(i, arg){
        if(typeof set[arg] === 'undefined'){
            set[arg] = arg;
        }
    });

    this.add = function(){

    }
}