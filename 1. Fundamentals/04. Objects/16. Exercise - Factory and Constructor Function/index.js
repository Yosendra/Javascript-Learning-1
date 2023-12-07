
const address = {
    street: "21st Jumpstreet",
    city: "New York",
    zipCode: 98012
};

// Factory Function
function createAddress(street, city, zipCode) {
    return { street, city, zipCode};
}

const address1 = createAddress("21st Jumpstreet", "New York", 98012);
console.log(address1)

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address("21st Jumpstreet", "New York", 98012);
console.log(address2)
