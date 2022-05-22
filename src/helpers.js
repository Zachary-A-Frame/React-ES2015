const choice = (items) => {
    let choice = Math.floor(Math.random() * items.length)
    return items[choice]
}

const remove = (items, item) => {
    if (items.includes(item) === true) {
        let index = items.indexOf(item)
        // console.log(items.splice(index, 1))
        // console.log
        items.splice(index, 1)
        return items
    }
}

// remove(["1","2","3"], "3")

choice(["1", "2", "3", "4", "5"])

export { choice, remove }