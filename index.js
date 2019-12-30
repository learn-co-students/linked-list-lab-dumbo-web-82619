function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(idx, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i = 0; i < idx; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(idx, linkedList, collection) {
  if (idx === 0) {
    return linkedList
  } else {
    return nodeAt(idx - 1, linkedList, collection).next 
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let idx = 0
  while (currentNode !== node) {
    idx++
    currentNode = next(currentNode, collection)
  }
  return idx
}

function insertNodeAt(idx, address, linkedList, collection){
  let preNode = nodeAt(idx - 1, linkedList, collection)
  let subNode = nodeAt(idx, linkedList, collection)
  let subNodeAddress = addressAt(subNode, linkedList, collection)
  let newNode = collection[address]

  
  preNode.next = address
  newNode.next = subNodeAddress
}

function deleteNodeAt(idx, linkedList, collection){
  let preNode
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < idx; i++) {
     preNode = currentNode
     currentNode = next(currentNode, collection)
  }
  preNode.next = currentNode.next
}
