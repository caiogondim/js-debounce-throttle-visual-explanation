var exp = (function() {
  'use strict'

  var exp = {
    init: function() {
      this.TIME_INTERVAL = 200
      this.ITERATION_MAX = 35

      this.dom = {}
      this.dom.exp = $('.exp')
      this.dom.vanillaEvent = this.dom.exp.find('.exp__item--vanilla')
      this.dom.debouncedEvent = this.dom.exp.find('.exp__item--debounce')
      this.dom.throttledEvent = this.dom.exp.find('.exp__item--throttle')

      this.bindEvents()
      this.consoleLocalOnly()

      return this
    },

    bindEvents: function() {
      this.onMouseEnter()
      this.onMouseLeave()
      this.onMouseMove()
    },

    draw: function() {
      this.draw.iterationCount = 0

      this.wasMouseMoveVanillaTriggered = false
      this.wasMouseMoveDebouncedTriggered = false
      this.wasMouseMoveThrottledTriggered = false
      console.log('draw setInterval')
      this.draw.interval = setInterval(function() {
        if (this.draw.iterationCount >= this.ITERATION_MAX) {
          // clearInterval(this.draw.interval)
          // return null
          this.reset()
        }

        console.log('draw iteration')

        if (this.wasMouseMoveVanillaTriggered) {
          this.dom.vanillaEvent
            .find('.exp__rail')
            .append('<span class="exp__tick-fired exp__tick-fired--vanilla"></span>')
        } else {
          this.dom.vanillaEvent
            .find('.exp__rail')
            .append('<span class="exp__tick exp__tick--vanilla"></span>')
        }

        if (this.wasMouseMoveDebouncedTriggered) {
          this.dom.debouncedEvent
            .find('.exp__rail')
            .append('<span class="exp__tick-fired exp__tick-fired--debounce"></span>')
        } else {
          this.dom.debouncedEvent
            .find('.exp__rail')
            .append('<span class="exp__tick exp__tick--debounce"></span>')
        }

        if (this.wasMouseMoveThrottledTriggered) {
          this.dom.throttledEvent
            .find('.exp__rail')
            .append('<span class="exp__tick-fired exp__tick-fired--throttle"></span>')
        } else {
          this.dom.throttledEvent
            .find('.exp__rail')
            .append('<span class="exp__tick exp__tick--throttle"></span>')
        }

        this.wasMouseMoveVanillaTriggered = false
        this.wasMouseMoveDebouncedTriggered = false
        this.wasMouseMoveThrottledTriggered = false

        this.draw.iterationCount++
      }.bind(this), this.TIME_INTERVAL)
    },

    reset: function() {
      console.log('reset')
      this.draw.iterationCount = 0
      this.dom.exp.find('.exp__rail *').hide()
    },

    onMouseEnter: function() {
      this.dom.exp.on('mouseenter', function(event) {
        console.log('mouse enter triggered')
        this.draw()
      }.bind(this))
    },

    onMouseLeave: function() {
      this.dom.exp.on('mouseleave', function(event) {
        console.log('mouse leave triggered')
        clearInterval(this.draw.interval)
        this.reset()
      }.bind(this))
    },

    onMouseMove: function() {
      this.dom.exp.on('mousemove', function(event) {
        console.log('mouse move triggered')
        this.handleVanillaMouseMove()
        this.handleDebouncedMouseMove()
        this.handleThrottledMouseMove()
      }.bind(this))
    },

    handleVanillaMouseMove: function() {
      this.wasMouseMoveVanillaTriggered = true
    },

    handleDebouncedMouseMove: (function () {
      'use strict'

      var timeWindow = 200
      var timeout = null

      var debouncedEvent = function (args) {
        console.log('mouse move debounced triggered')
        this.wasMouseMoveDebouncedTriggered = true
      }

      return function() {
        var context = this
        var args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function(){
          debouncedEvent.apply(context, args)
        }, timeWindow)
      }
    }()),

    handleThrottledMouseMove: (function () {
        'use strict'

        var timeWindow = 400
        var lastExecution = new Date((new Date()).getTime() - timeWindow)

        var throttledEvent = function () {
          console.log('mouse move throttled triggered')
          this.wasMouseMoveThrottledTriggered = true
        }

        return function() {
          if ((lastExecution.getTime() + timeWindow) <= (new Date()).getTime()) {
            lastExecution = new Date()
            return throttledEvent.bind(this)()
          }
        }
    }()),

    consoleLocalOnly: function() {
      // monkey patch to run console.log only in localhost during development

      if (document.location.href.indexOf('://localhost') === -1) {
        console.log = function() {}
      }
    }
  }

  return exp.init()

}())
