// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {
    #length
    constructor (value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head
        
        this.#length = 1
        console.log(this)
    }
    get length () {
        return console.log(`This sneak is ${this.#length} meters long.`)
    }
    append(value) {
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode
        this.#length++

        console.log(value, 'appended to', this)
    }
    prepend(value) {
        const newNode = new Node(value)
        
        newNode.next = this.head
        this.head = newNode
        this.#length++

        console.log(value, 'prepended to', this)
    }
    insert(index = 0, value) {
        if (index <= 0 ) return console.error('Cannot Insert: Please insert a valid index at first param.')
        if (index >= this.#length) return this.append(value)
        if (index == 0) return this.prepend(value)

        let newNode = new Node(value)
        const firstPointer = this.node(index - 1)
        const holdingPointer = firstPointer.next

        firstPointer.next = newNode
        newNode.next = holdingPointer
        this.#length++

        console.log('sneak eated', value, 'at', index, this)
    }
    get behead() {
        if (this.#length < 2) return this.#killed

        let newHead = new Node()
        newHead = this.head.next
        this.head = newHead

        this.#length--
        console.log('Snake decapitated.', this)
    }
    get sever() {
        if (this.#length < 2) return this.#killed

        let newTail = new Node()
        newTail = this.node(this.#length - 2)
        newTail.next = null
        this.tail = newTail

        this.#length--
        console.log('Snake docked.', this)
    }
    remove (index = 0) {
        if (index < 0 ) return console.error('Cannot remove: Please insert a valid index.')
        if (index >= this.#length) return console.error('Cannot remove: inexistent index.')
        if (index == 0 ) return this.behead
        if (index == this.#length - 1) return this.sever

        let newPath = new Node()
        newPath = this.node(index - 1)
        newPath.next = this.node(index).next
        this.node(index - 2).next = newPath

        this.#length--
        console.log('index', index, 'removed from', this)
    }
    get #killed () {
        this.head = {
            value: null,
            next: null,
        }
        console.log('Snake killed.', this)
    }
    swap (index1, index2) {
        if (arguments <= 0 ) return console.error('Cannot Swap: please insert valid indexes values.')
        if (arguments > this.#length) return console.error("Cannot Swap: both indexes doesn't exist.")
        let counter = 0, value1, value2
        let currentNode = this.head
        let major = Math.max(index1, index2)

        while (counter <= major) {
            if (counter == index1) value1 = currentNode.value
            if (counter == index2) value2 = currentNode.value
            if (counter == major ) break
            currentNode = currentNode.next
            counter++
        } 
        counter = 0, currentNode = this.head
        while (counter <= major) {
            switch (counter) {
                case index1:
                    currentNode.value = value2
                    break
                case index2:
                    currentNode.value = value1
                    break
                default:
                    break
            }
            if (counter == major) break
            currentNode = currentNode.next
            counter++
        }
        console.log(this)
    }
    node(index = 0) {
        if (index == 0) return this.head
        if (index < 0) return console.error('Cannot bring Node: Please insert a valid index at first param.')
        let counter = 0, currentNode = this.head

        while (counter != index) {
            currentNode = currentNode.next
            counter++
        } console.log(index, currentNode)
        return currentNode
    }
}

let myLinkedList = new MySinglyLinkedList(1)
myLinkedList.append(2)
myLinkedList.prepend(0)
myLinkedList.length
myLinkedList.append(3)
myLinkedList.length
myLinkedList.remove(2)
myLinkedList.length
console.log('________________________________________________')