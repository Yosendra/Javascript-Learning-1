
function showAddress(address) {
    for (const key in address)
        console.log(key, address[key])
}

const address = {
    street: "21st Jumpstreet",
    city: "New York",
    zipCode: 98012
};

showAddress(address);