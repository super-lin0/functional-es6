const MayBe = function(value) {
  this.value = value;
};

MayBe.prototype.isNothing = function() {
  return this.value === null || this.value === undefined;
};

MayBe.of = function(value) {
  return new MayBe(value);
};

MayBe.prototype.map = function(fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

export { MayBe };
