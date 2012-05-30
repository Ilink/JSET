/*
JSET.js
A group of unique values, hashed for speed and convenience. This allows for easy set operations, like Intersection.
Using a set is a little more complicated than an array, but it helps ensure the invariants are respected.

There is a tradeoff for speed using this design, though I have not tested how much speed.

The underlying structure looks like this:

    set: {
        "1": 1,
        "2" : 1,
        "3": 1
    }

The "1"s are just placeholder values. There may be a more efficient way of doing this.
 */

function Set(){
    var set;
    set = {};

    /*
    @function _add
    Inserts any number of values into the set.
    Maintains the invariant that set values must be unique.
     */
    function _add(){
        $.each(arguments, function(i, arg){
            var val = set[arg]
            if(typeof val === 'undefined'){
                set[arg] = 1;
            }
        });
    }

    /*
    @Constructor
    Accepts any number of arguments, inserts them into set
     */
    _add(arguments);

    /*
    @function insert
    Accepts any number of arguments. Public alias for _add
     */
    this.insert = function(){
        _add(arguments);
    }
}