var Queue = /** @class */ (function () {
    function Queue() {
        this.arr = [];
    }
    Queue.prototype.push = function (item) {
        this.arr.push(item);
    };
    Queue.prototype.pop = function () {
        return this.arr.shift();
    };
    return Queue;
}());
var newqueue = new Queue();
newqueue.push(1);
console.log(newqueue.pop().toFixed());
