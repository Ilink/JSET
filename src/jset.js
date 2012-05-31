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

Note that this assumes you are only using sets of numbers. Sets of strings are not supported at the moment, for simplicity's sake.
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
    _add.apply(this, arguments);

    /*
    @function add
    Accepts any number of arguments. Public alias for _add
     */
    this.add = function(){
        _add.apply(this, arguments);
    }

    /*
     @function push
     Alias for add
     */
    this.push = function(){
        _add.apply(this, arguments);
    }

    /*
    @function to_arr
    Returns an array representation of the set.
     */
    this.to_arr = function(){
        var arr = [];
        $.each(set, function(i, v){
            arr.push(Number(i));
        });
        return arr;
    }

    /*
    @function intersection
    Accepts two sets and finds the intersection. Returns a set of the values in common.
     */
    this.intersection = function(a, b){
        var set = new Set();
        $.each(a, function(i, val){
            if(typeof b[i] !== 'undefined') {
                set.add(val);
            }
        });
        return set
    }

    /*
    @function remove
    Accepts any number of arguments. Removes values from the set.
     */
    this.remove = function(){
        var args = Array.prototype.slice.call(arguments);
        $.each(args, function(i, arg){
           delete set[arg]
        });
    }
}