Array.prototype.unique = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        
        if (result.includes(this[i])) {
            continue
        } else {
            result.push(this[i])
        };

    };

    return result;
};

Array.prototype.twoSum = function() {
    let result = [];

    for (let i = 0; i < this.length-1; i++) {
        for (let j = 1; j < this.length; j++) {
            if ((this[i] + this[j]) === 0) {
                result.push([i, j]);
            };
        };
    };

    return result;
};
