const EventEmitter = require("./eventEmitter.js")

test("eventEmitter basic test", () => {
  let n = 0
  let m = 0

  const event = new EventEmitter()
  const subscriptionN = event.subscribe("Event1", value => n = value)
  const subscriptionM = event.subscribe("Event2", value => m = value)

  event.emit("Event1", 18)
  expect(n).toBe(18)

  event.emit("Event2", 987)
  expect(m).toBe(987)

  subscriptionM.unsubscribe()
  event.emit("Event2", 5)

  expect(m).toBe(987)
})

