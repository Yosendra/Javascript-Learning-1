
function Stopwatch(){
    let startTime, endTime, duration, running = 0
    
    this.start = function(){
        if (running)
            throw new Exception('Stopwatch has already started')

        startTime = new Date()
        running = true
    }

    this.stop = function(){
        if (!running)
            throw new Exception('Stopwatch is not started')

        endTime = new Date()
        running = false
        seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function(){
        duration = 0
        startTime = null
        endTime = null
        running = false
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
}