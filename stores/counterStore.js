import Store from './Store'

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0)
  }

  increment() {
    this.setState(this.getState() + 1)
  }

  decrement() {
    this.setState(this.getState() - 1)
  }
}
//
const counterStore = new CounterStore();

export default counterStore;
