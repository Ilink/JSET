/*
JSET.js
A group of unique values, hashed for speed and convenience. This allows for easy set operations, like Intersection.
Using a set is a little more complicated than an array, but it helps ensure the invariants are respected.

Lookups should be very quick, although probably not quite as fast as an ordinary hash. Typical memory tradeoffs between hashes and arrays also come into play.

The underlying structure looks like this:

    set: {
        "1": 1,
        "2" : 1,
        "3": 1
    }

The "1"s are just placeholder values - they are never read themselves.
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
        var args = Array.prototype.slice.call(arguments);
        $.each(args, function(i, arg){
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

    /*
    @function intersection
    Accepts two sets and finds the intersection.
     */
    this.intersection = function(a, b){
        var c = [];
        $.each(a, function(i, val){
            if(typeof b[i] !== 'undefined') {
                c.push(val);
            }
        });
    }

    /*
    @function remove
    Accepts any number of arguments. Removes values from the set.
     */
    this.remove = function(){
        $.each(arguments, function(i, arg){
           delete set[arg]
        });
    }
}