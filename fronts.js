class SLLNode{
    constructor(val){
        this.value = val;
        this.next - null;
    }
}

class SLL {
    contructor(){
        this.head = null;
    }

    addFront(value) {
    	var newNode= new SLLNode(value);
        newNode.next = this.head
        this.head = newNode;
        return this.head
    }

    removeFront(){
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front(){
        return this.head.value
    }

    display(){
        var allValues ="";
        if (this.head==null){
            return allValues;
        }
        allValues += this.head.value;
        var slider = this.head.next;
        while (slider != null){
            allValues += ` ${slider.value}`;
            slider = slider.next
        }
        return allValues
    }
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
console.log(mySLL)
mySLL.removeFront()
console.log(mySLL)
mySLL.addFront(55)
console.log(mySLL)
console.log(mySLL.front())
console.log(mySLL.display())

