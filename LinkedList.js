class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value)
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

        addElement1(value, index){

            let temp=this.rootNode;
            let cnt=0;
            let prev;
            let node=new Node(value);
            
                while(cnt<index){
                    prev=temp;
                    temp = temp.nextNode;
                    cnt++;
                }
                node.nextNode=temp;
                prev.nextNode=node;
                this.count++;
        }

        removeElement(index){
            let temp=this.rootNode;
            let cnt=0;
            let next=temp.nextNode;
            while(cnt+1<index){
                temp = temp.nextNode;
                next=next.nextNode;
                cnt++;
                    
            }
                temp.nextNode = next.nextNode;
                this.count--;
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


let list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(3);
list.addElement(3);
list.addElement1(4,3);
list.printElements();
list.removeElement(2);
console.log("After Update")
list.printElements();

