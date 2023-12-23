// Module -> mechanism to split the code into several files
//  we don't want to have one gigantic file with hundreds, thousand, 
//  of lines of code. That's really hard to maintain.
//
// Benefit of Modularity:
//  ○ Increase Maintainability -> our code is better organized
//  ○ Reusability -> we can reuse a module in different part of application
//  ○ Abstract -> we can apply abstraction principle, only expose what is essential and the complexity in the module

const _radius = new WeakMap() // we don't want to expose this to the outside

class Circle {  // only this class we want to expose
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius '+ _radius.get(this))
    }
}

const c = new Circle(1)
// We should not expose what should have been private
console.log(_radius.get(c)) // Print the private _radius value

// Brief history of modules in Javascript.
// No modules in ES5
//
// Module format we have:
// ○ AMD (browser)
// ○ CommonJS (Node.js)
// ○ UMD (Borwser / Node.js) 
// ○ ES6 Modules