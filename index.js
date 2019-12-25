function getName(node) {
    return node['name']
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    return collection[head['next']]
}

function nodeAt(index, linkedList, collection) {
    if (index > 0) {
        let head = collection[linkedList]
        for (let i = 0; i < index; i++) {
            head = next(head, collection)
        }
        return head
    } else {
        return headNode(linkedList, collection)
    }
}

function addressAt(index, linkedList, collection) {
    if (index > 0) {
        let head = collection[linkedList]
        for (let i = 1; i < index; i++) {
            head = next(head, collection)
        }
        return head['next']
    } else {
        return linkedList
    }
}

function indexAt(node, collection, linkedList) {
    let index = 0
    let head = collection[linkedList]
    while (head !== node) {
        head = next(head, collection)
        index += 1
    }
    return index
}

function insertNodeAt(index, nextValue, linkedList, collection) {
    if (index > 0) {
        collection[nextValue].next = addressAt(index, linkedList, collection)
        nodeAt(index - 1, linkedList, collection).next = nextValue
    } else {
        nodeAt(index, linkedList, collection).next = linkedList
    }
}

function deleteNodeAt(index, linkedList, collection) {
    nodeAt(index - 1, linkedList, collection).next = nodeAt(index, linkedList, collection).next
}