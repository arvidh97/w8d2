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

Array.prototype.transpose = function() {
    // let result = [Array(this[0].length)];
    let result = [];
    for(let i = 0; i < this[0].length; i++) {
        result.push([]);
    };

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) { 
            result[j].push(this[i][j]);
        };
    }; 
    return result;
};

// let newArray = [];
// for(let i = 0; i < 3; i++){
//     newArray.push([]);
// };