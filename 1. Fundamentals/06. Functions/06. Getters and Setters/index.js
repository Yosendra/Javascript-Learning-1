
const person = {
    firstName: 'John',
    lastName: 'Doe',

    // getter
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    },

    // setter
    set fullname(value){
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

// getter -> access properties of an object
// setter -> change (mutate) them

console.log(person.fullname);

person.fullname = 'Abraham Lincoln'
console.log(person);