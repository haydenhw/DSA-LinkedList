const LinkedList = require('./linked-list')

function makeList() {
  const list = new LinkedList()
  list.addLast(6)
  list.addLast(4)
  list.addLast(3)
  list.addLast(1)

  return list
}

test('remove duplicates', () => {
  const list = new LinkedList()
  list.addLast(1)
  list.addLast(2)
  list.addLast(2)
  list.addLast(2)
  list.addLast(3)
  list.removeDuplicates()
  expect(list.root.next.next.value).toBe(3)
})

test('addLast - creates a root node', () => {
  const list = makeList()
  expect(list.root.value).toBe(6)
})

test('addLast - method adds a node to the end of the list', () => {
  const list = makeList()
  expect(list.root.next.next.value).toBe(3)
})

test('find - returns the node with the given value', () => {
  const list = makeList()
  const foundNode = list.find(3)
  expect(foundNode.next.value).toBe(1)
})

test('find - returns the last node', () => {
  const list = makeList()
  const foundNode = list.find(1)
  expect(foundNode.value).toBe(1)
})

test('remove - removes a node from the middle of the list', () => {
  const list = makeList()
  list.remove(3)
  const foundNode = list.find(4)
  expect(foundNode.next.value).toBe(1)
})

test('remove - removes the last node from the list', () => {
  const list = makeList()
  list.remove(1)
  const foundNode = list.find(3)
  expect(foundNode.next).toBe(null)
})

test('remove - the root node from the list', () => {
  const list = makeList()
  list.remove(6)
  expect(list.root.value).toBe(4)
  expect(list.root.next.value).toBe(3)
})














