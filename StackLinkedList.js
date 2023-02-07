class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class StackLL
{
    rootNode = null;
    count = 0;
    push(value)
    {
        if(this.rootNode == null){
            this.rootNode= new Node(value)
            this.count++;
        }else{
            var temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
        }
    }
    pop()
    {
        var temp = this.rootNode;
        var prev;
        while(temp.nextNode != null){
            prev=temp
            temp = temp.nextNode;
        }
        prev.nextNode=null;
        this.count--;
    }
    peek()
    {
        var temp = this.rootNode;
        
        while(temp.nextNode != null){
           
            temp = temp.nextNode;
        }
        console.log("Peek Element")
        console.log(temp.data)

    }
    printElements(){
        var temp = this.rootNode;
        if(temp == null){
            console.log("Is empty!")
        }else{
        while(temp != null ){
            console.log(temp.data)
            temp = temp.nextNode;
        }
    }
    }
}
var stack=new StackLL()
stack.push(1)
stack.push(2)
stack.push(3)
stack.printElements()
stack.peek()
console.log("After Update")
stack.pop()
stack.peek()
console.log("After Update")
stack.pop()
stack.printElements()
