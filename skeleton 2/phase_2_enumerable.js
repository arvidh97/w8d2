const callback = function(ele) {
    return ele * 2
    };


Array.prototype.myMap = function(banana) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(banana(this[i]));
    };
    return result;
    };


