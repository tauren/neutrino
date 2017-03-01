import xtag from 'x-tag'

xtag.register('x-frankenstein', {
  // content: '‹h2›My name is Frank‹/h2›' +
  //          '‹span›I work for a mad scientist‹/span›'
  content: function() {/*
    ‹h2›My name is Frank‹/h2›
    ‹span›I work for a mad scientist‹/span›
  */}
});


xtag.register('x-clock', {
  lifecycle: {
    created: function(){
      this.start();
    }
  },
  methods: {
    start: function(){
      this.update();
      this.xtag.interval = setInterval(this.update.bind(this), 1000);
    },
    stop: function(){
      this.xtag.interval = clearInterval(this.xtag.interval);
    },
    update: function(){
      this.textContent = new Date().toLocaleTimeString();
    }
  },
  events: {
    tap: function(){
      if (this.xtag.interval) this.stop();
      else this.start();
    }
  }
});