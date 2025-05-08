class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;
    let current = null;

    for (const value of values) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        current = this.head;
      } else {
        current.next = newNode;
        current = newNode;
      }
    }
  }

  print() {
    let result = [];
    let current = this.head;

    while(current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" → "));
  }

  removeDuplicates() {
    const seen = new Set();

    let current = this.head;
    let prev = null;

    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
      } else {
        seen.add(current.value);
        prev = current;
      }

      current = current.next;
    }

    return this.head;
  }

  removeDuplicatesNoBuffer() {
    let current = this.head;

    while (current) {
      let runner = current;

      while(runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      
      current = current.next;
    }

    return this.head;
  }

  lastKth(k) {
    if (k <= 0) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) {
        return null;
      }

      fast = fast.next;
    }

    while(fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  deleteMiddleNode(node) {
    if (!node || !node.next) {
      return false;
    }

    node.value = node.next.value;
    node.next = node.next.next;

    return true;
  }

  partitionWithMerge(value) {
    let current = this.head;
    let smallerNodes = [];
    let biggerNodes = [];
    
    while(current) {
      if (current.value < value) {
        smallerNodes.push(current.value);
      } else {
        biggerNodes.push(current.value);
      }

      current = current.next;
    }

    const mergedList = smallerNodes.concat(biggerNodes);
    const newList = new LinkedList(mergedList);
    this.head = newList.head;
  }

  partitionInPlace(value) {
    let current = this.head;
    let startIndex = null;

    while(current) {
      if (startIndex === null && current.next.value === value) {
        startIndex = current;
        current = current.next;
        continue;
      }

      if (current.value < value) {
        startIndex.next = current;
        startIndex = current;
      }
      
      current = current.next;
    }
  }
}

module.exports = { LinkedList };