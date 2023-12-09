
const person = {
    firstName: 'John',
    lastName: 'Doe',

    get fullname(){
        return `${this.firstName} ${this.lastName}`
    },

    set fullname(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string')

        const parts = value.split(' ')
        if (parts.length !== 2)
            throw new Error('Enter first & last name')

        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

// (Without guarding the value type) What if we assign 'bool' value in fullname setter?
// person.fullname = false     // an exception

try {
    person.fullname = ''
} catch (e) {
    console.error(e.message)
}