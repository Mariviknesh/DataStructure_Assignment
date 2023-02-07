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

            var temp=this.rootNode;
            var cnt=0;
            var prev;
            var node=new Node(value);
            
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
            var temp=this.rootNode;
            var cnt=0;
            var next=temp.nextNode;
            while(cnt+1<index){
                temp = temp.nextNode;
                next=next.nextNode;
                cnt++;
                    
            }
                temp.nextNode = next.nextNode;
                this.count--;
            
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


var list = new LinkedList()
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
