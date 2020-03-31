var StopWatch = function () {
  this.startTime = performance.now()
  this.lastTime = this.startTime

  StopWatch.prototype.reset = function (msg, threshold) {
    var elapsed = performance.now() - this.lastTime
    if (msg && (!threshold || elapsed >= threshold)) {
      console.log(msg + ': ' + elapsed)
    }
    this.lastTime = performance.now()
  }

  StopWatch.prototype.time = function () {
    return performance.now() - this.lastTime
  }
}
