class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.

  constructor(initialState) {
    this.state = initialState
    this.listeners = []
  }

  addListener(listener) {
    this.listeners.push(listener)

    const removeListener = () => { this.listeners = this.listeners.filter((l) => l !== listener ) }
    return removeListener
  }

  setState(newState) {
    this.state = newState
    this.listeners.forEach(listener => listener(newState))
  }

  getState() {
    return this.state
  }
}

export default Store;
