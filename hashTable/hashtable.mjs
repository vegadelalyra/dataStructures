class HashTable {
    #data
    constructor(size) {
        this.#data = new Array(size)
        console.log(this)
        console.log('Hash Table created.')
    }
    #hashMethod(key) {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.#data.length
        } return hash
    }
    set(key, value) {
        const address = this.#hashMethod(key)

        if (!this.#data[address]) this.#data[address] = []
        this.#data[address].push([key, value])

        return console.log('MEMORY SET', key, value, this.#data)
    }
    get(key) {
        const address       = this.#hashMethod(key),
              currentBucket = this.#data[address]

    if (!currentBucket?.some(bucket => bucket[0] === key)) return
    return console.log('get', key, currentBucket.find(bucket => bucket[1]))
    }

    delete (key) {
        const address       = this.#hashMethod(key),
              currentBucket = this.#data[address]

        if (!currentBucket?.some(bucket => bucket[0] === key)) return console.error(key, 'not registered in memory.')
        const index = currentBucket.findIndex(bucket => bucket[0] === key)
        const deletedPair = currentBucket.find(pair => pair[0] === key)
        const miau = this.#data[address].splice(index, 1)
        return console.log('deleted', deletedPair, '\nNEW MEMORY',this.#data)
    }

    get getAllKeys() {
        return console.log('All keys:', 
        this.#data.flat(2)
        .filter(pairs => pairs[0] !== undefined)
        )
    }
}

// some testing
const myHashTable = new HashTable(50) 
myHashTable.set('Diego', 1990)
myHashTable.set('Mariana', 1990)
myHashTable.set('Alejandra', 2000) 
myHashTable.set('Adriana', 2000) 
myHashTable.get('Diego')
myHashTable.getAllKeys
myHashTable.delete('Diegoa')
myHashTable.delete('Diego')
myHashTable.set('Diego', 1990)

export default HashTable