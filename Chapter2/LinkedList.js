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
}

module.exports = { LinkedList };