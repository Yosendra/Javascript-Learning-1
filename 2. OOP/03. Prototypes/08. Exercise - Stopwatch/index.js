
// The solution is breaking the abstraction principle,
// We pollute the public interface by exposing much property that should have been private
// We try to optimize the code by attaching the methods in the prototype object
// but we get this result. PREMATURE OPTIMIZATION is the root of all EVILS.

function Stopwatch(){
    let startTime, endTime, duration, running = 0
    
    Object.defineProperty(this, 'duration', {
        get: function () { return duration },
        set: function (value) { duration = value }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime },
        set: function (value) { startTime = value }
    })
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime },
        set: function (value) { endTime = value }
    })
    Object.defineProperty(this, 'running', {
        get: function () { return running },
        set: function (value) { running = value }
    })
}

Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started')

    this.startTime = new Date()
    this.running = true
}

Stopwatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started')

    this.endTime = new Date()
    this.running = false
    seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
}

Stopwatch.prototype.reset = function () {
    this.duration = 0
    this.startTime = null
    this.endTime = null
    this.running = false
}

let sw = new Stopwatch()