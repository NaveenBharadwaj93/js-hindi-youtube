my_arr = [1, 3, 4, 5, 6, "asdxd"]

Array.prototype.customForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback (this[i], i, this);
    }
}

my_arr.customForEach(function(e,index,context){console.log(`${e} , ${index}, ${context}`);});

my_arr.forEach((element,index,context) => {
console.log( `Index is ${index}, element is ${element}, context is ${context}`);
})