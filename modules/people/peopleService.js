const Queue = require('../queue/Queue');
const store = require('../../store');
const { dequeue } = require('../pets/petsService');

// Set up initial data.
// --------------------

const peopleQueue = new Queue();
store.people.forEach(person => peopleQueue.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return peopleQueue.all();
  },

  enqueue(person) {
    // Add a person to the queue.

    return peopleQueue.enqueue(person);
  },

  dequeueLoop() {
    // Remove a person from the queue.
    return peopleQueue.enqueue(peopleQueue.dequeue());
  },

  dequeue() {
    // Remove a person from the queue.
    return peopleQueue.dequeue();
  }
};
