
// 'this' keyword -> the object that is executing the current function

// - if a function is part of an object (it's called method).
//   'this' inside that method refer to the object itself
// - if a function is a regular function
//   'this' refer to the global object, which is window object in browser and global in node

const video = {
    title: 'a',
    play(){
        console.log(this)
    }
}
video.play()    // this -> video object

video.stop = function(){
    console.log(this)
}
video.stop()    // this -> video object

/////////////////////////////////////////////////////

// Regular Function
function playVideo() {
    console.log(this);
}
playVideo()     // this -> window object

// Constructor Function
function Video(title) {
    this.title = title
    console.log(this);
}
const v = new Video('b')    // this -> Video object

//////////////////////////////////////////////////////

const movie = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        let movie = this    // part of solution
        this.tags.forEach(function(tag){
            console.log(this.title, tag); // this -> window object
            // reason: callback function is not part of the object, it execute in somewhere else, internal in javascript
            // solution: '.forEach()' has second parameter to bind 'this' keyword to certain object inside the callback function. Use that to bind this with movie object
        }, movie)           // part of solution
    }
}
movie.showTags()
