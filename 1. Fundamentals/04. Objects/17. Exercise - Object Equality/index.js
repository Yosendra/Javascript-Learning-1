
// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('A', 'B', 'C');
let address2 = new Address('A', 'B', 'C');
let address3 = address1;

// Objects are equal if each property and its value are equal to each other
function areEqual(address1, address2) {
    for (const key in address1)
        if (address1[key] !== address2[key])
            return false;
    return true;
}

// Objects are same if object refers to same address
function areSame(address1, address2) {
    return address1 === address2;
}

console.log("Are equal? ", areEqual(address1, address2));
console.log("Are same? ", areSame(address1, address2));
console.log("Are same? ", areSame(address1, address3));