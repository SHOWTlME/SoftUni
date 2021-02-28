class List {
    constructor() {
        this.myCollection = [];
        this.size = 0;
    }

    add(element) {
        this.myCollection.push(element);
        this.myCollection.sort((a, b) => a - b);
        this.size = this.myCollection.length;
    }

    remove(index) {
        if (this.myCollection[index] === undefined) {
            throw new Error('Cannot reach index');
        } else {
            this.myCollection.splice(index, 1);
            this.size = this.myCollection.length;
        }
    }

    get(index) {
        if (this.myCollection[index] === undefined) {
            throw new Error('Cannot reach index');
        } else {
            return this.myCollection[index];
        }
    }
}


let list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.remove(1);
console.log(list.myCollection);
