import React from 'react';

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;

  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) { //if index is out of range
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head); //if it's the first
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;  //set current to first
    let count = 0;
    while (count < index) {
      previous = current; //node before index to insert;
      count++;
      current = current.next //node after index
    }

    node.next = current;
    previous.next = node;

    this.size++
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data)
      }
      count++;
      current = current.next;
    }
    return;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) { //if out of range
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) { //remove first
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  getSize() {
    return this.size;
  }

  //Clear List
  clearList() {
    this.head = null;
    this.size = 0
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

export { Node, LinkedList }
