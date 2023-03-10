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
            let temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
        }
    }
    dequeue()
    {
        let temp = this.rootNode;
        let next=temp.nextNode;
        this.rootNode=next;
    }
    printElements(){
        let temp = this.rootNode;
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
let queue=new QueueLL()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.printElements()
console.log("After dequeing")
queue.dequeue()
queue.printElements()
