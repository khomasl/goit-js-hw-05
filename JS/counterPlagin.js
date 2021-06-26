const CounterPlagin = function ({rootSelector, initialValue = 0, step = 1} = {}){
    this._value = initialValue;
    this._step = step;
    this._refs = this._getRefs (rootSelector);
    this._bindEvents();
    this.updateValueUI();
};

CounterPlagin.prototype._getRefs = function (rootSelector){
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');
  return refs;
};

CounterPlagin.prototype._bindEvents = function(){
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    });
};

CounterPlagin.prototype.updateValueUI = function(){
    this._refs.value.textContent = this._value;
};

CounterPlagin.prototype.increment = function(){
    this._value += 1;
};

CounterPlagin.prototype.decrement = function(){
    this._value -= 1;
};

new CounterPlagin({rootSelector: '#counter-1', initialValue: 100, step: 10});

new CounterPlagin({rootSelector: '#counter-2', initialValue: 10, step: 2});

new CounterPlagin({rootSelector: '#counter-3', initialValue: 20, step: 2});