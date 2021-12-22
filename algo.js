class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  class DoublyLinkedList {
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
    insertAtFront(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head
        temp.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      return this;
      //insert a node at front
    }
  
    insertAtBack(data) {
      const newTail = new Node(data);
  
      if (!this.head) {
        // if no head set the newTail to be both the head and the tail
        this.head = newTail;
        this.tail = newTail;
      } else {
        this.tail.next = newTail;
        newTail.prev = this.tail;
  
        this.tail = newTail;
      }
      return this;
      //insert a node at back
    }
  
      // remove the nodes with the search data.
    remove(data){
      // Pseudo
      // 1. Find the node containing the data
      // 2. See what's on either side
      // 3. Have each side of the runner point 
      //      to one another
      var runner = this.head
      while (runner) {
        // 1. Find the node containing the data
        if (runner.data == data) {
          // 2. See what's on either side
          let prevNode = runner.prev;
          let nextNode = runner.next;        
          
          // Check outlier at Fist Node
          if (prevNode == null) {
            // a nextNode point to nothing
            nextNode.prev = null;
            // b. head point to nextNode
            this.head = nextNode;
            // erase runner's pointers
            runner.next = null;
            runner.prev = null;
            return;
          }
          if (nextNode == null){
            prevNode.next = null;
            this.tail = prevNode;
            runner.next = null;
            runner.prev = null;
            return;
          }
          // 3. Have each side of the runner point 
          //      to one another
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          // 4. Erase all of runner's pointer
          runner.prev = null;
          runner.next = null;
          return;
        }
        runner = runner.next;
      }
     }
  
    append(target, newData){
      // insert a new node of the given data right after the target node
    }
  
  }
  
  let emptyList = new DoublyLinkedList();
  
  console.log(emptyList.toArray());
  
  let list1 = new DoublyLinkedList();
  list1.insertAtFront(1);
  list1.insertAtFront(2);
  list1.insertAtFront(3);
  list1.insertAtFront(4);
  console.log(list1.toArray());
  
  let list2 = new DoublyLinkedList();
  list2.insertAtFront(1);
  list2.insertAtFront(2);
  list2.insertAtFront(3);
  list2.insertAtFront(2);
  list2.insertAtFront(5);
  list2.insertAtFront(6);
  console.log(list2.toArray());
  list2.remove(3)
  console.log(list2.toArray());
  list2.remove(6)
  console.log(list2.toArray());
  list2.remove(1)
  console.log(list2.toArray());
  
  