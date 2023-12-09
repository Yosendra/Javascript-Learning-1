
const movie1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this    // part of solution
        this.tags.forEach(function(tag){
            // change 'this' to 'self'. Value of 'this' will change in somewhere else
            console.log(self.title, tag);   
        })
    }
}
movie1.showTags()

////////////////////////////////////////////////////////////////
// Other solutin use
// ([invoke function]).call( {object you want to bind to 'this'} )
// ([invoke function]).apply( {object you want to bind to 'this'} )
// ([invoke function]).bind() -> it return a function, not call the function

function playVideo(a, b) {
    console.log(this);
}
playVideo.call({ name: 'John' }, 1, 2)
playVideo.apply({ name: 'John' }, [1, 2])

const bindFn = playVideo.bind({ name: 'John' })
bindFn()
// or you can immediate invoke like this
// playVideo.bind({ name: 'John' })()

////////////////////////////////////////////////////////////////
// Use '.bind()'

const movie2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);  // still using 'this'
        }.bind(this))  // but we chaining with '.bind()' at the callback function here
    }
}
movie2.showTags()

////////////////////////////////////////////////////////////////
// Use Arrow Function

const movie3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        // this inside 'showTags()' refers to 'movie3' object
        this.tags.forEach((tag) => {
            // arrow function inherit the 'this' from containing function
            // lexical context
            console.log(this.title, tag)
        })
    }
}
movie3.showTags()