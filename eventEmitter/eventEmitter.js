class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe(event, cb) {
    if (this.events[event] === undefined) {
      this.events[event] = {
        cbs: [cb]
      }
    } else {
      this.events[event].cbs.push(cb)
    }

    return {
      unsubscribe: () => {
        const index = this.events[event].cbs.indexOf(cb)
        debugger;
        if (index > -1)
          this.events[event].cbs.splice(index, 1)
      }
    }
  }

  emit(event, value) {
    if (this.events[event] !== undefined) {
      this.events[event].value = value
      this.events[event].cbs.map(cb => cb(value))
    } else {
      this.events[event] = {
        value: value,
        cbs: []
      }
    }
  }
}

module.exports = EventEmitter