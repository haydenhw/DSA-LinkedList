class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  find(value) {
    let currNode = this.root
    while (currNode.value !== value) {
      if (currNode.next == null) {
        return null
      }
      currNode = currNode.next
    }
    return currNode
  }

  addLast(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }
    let currNode = this.root
    while (currNode.next) {
      currNode = currNode.next
    }
    currNode.next = new Node(value)
  }

  remove(value) {
    let currNode = this.root
    let prevNode = this.root

    if (currNode.value === value) {
      this.root = this.root.next
      return
    }

    while (currNode.value !== value) {
      prevNode = currNode
      currNode = currNode.next
    }

    if (!currNode.next){
      prevNode.next = null
      return
    }


    prevNode.next = currNode.next
  }

  findNextNonDuplicate(node) {
    let currNode = node
    while (node.value === currNode.value) {
      currNode = currNode.next
    }

    return currNode
  }

  removeDuplicates() {
    let currNode = this.root
    while (currNode.next) {
      if (currNode.value === currNode.next.value) {
        currNode.next = this.findNextNonDuplicate(currNode)
      }
      currNode = currNode.next
    }
  }
}


module.exports = LinkedList


















