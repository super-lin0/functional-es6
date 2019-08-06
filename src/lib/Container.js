const Container = function(val) {
  this.val = val;
};
Container.of = function(val) {
  return new Container(val);
};
Container.prototype.map = function(fn) {
  return Container.of(fn(this.val));
};

export { Container };
