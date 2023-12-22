
function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}
HtmlElement.prototype.focus = function() {
    console.log('focused')
}

function HtmlSelectElement(array = []) { 
    this.items = array
    this.addItem = function(item) {
        this.items.push(item)
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }
}
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

const e = new HtmlElement()
const se = new HtmlSelectElement()
console.log(e);
console.log(se);