const multiplyer = function(ele) {
    // console.log(ele * 2)
    return ele * 2
};

const toSquare = function(ele) {
    return ele * ele
};





Array.prototype.myMap = function(block) {
    let result = [];

    // for(let i = 0; i < this.length; i++) {
    //     result.push(block(this[i]));
    // };

    // return this.myEach(block);
    this.myEach(ele => result.push(block(ele)));
    // this.myEach(function(ele) {
    //     result.push(block(ele))
    // });
    // block = multiplyer 
    // myEach cb = (ele => result.push(block(ele)))

    return result;
};

Array.prototype.myEach = function(someBlock) {
    // let result = [];

    for(let i = 0; i < this.length; i++) {
        // result.push(block(this[i]));

            
        someBlock(this[i]);
    };

    // return result;
};


// let testCase = [1, 2, 3, 4]

// console.log(testCase.myEach(multiplyer))

const callback = function(acc, ele) {
    return acc = acc + ele;

};

Array.prototype.myReduce = function(callback, initialValue) {
    let result = 0;
    if (initialValue === undefined) {
        initialValue = this.splice(0, 1);
    };
    this.myEach(ele => result = callback(initialValue, ele)) 
    return result
};  

