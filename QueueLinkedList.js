class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class QueueLL
{
    rootNode = null
    count=0;
    enqueue(value)
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
    dequeue()
    {
        var temp = this.rootNode;
        var next=temp.nextNode;
        this.rootNode=next;
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
var queue=new QueueLL()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.printElements()
console.log("After dequeing")
queue.dequeue()
queue.printElements()
