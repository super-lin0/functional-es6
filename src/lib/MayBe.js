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

MayBe.prototype.join = function() {
  return this.isNothing() ? MayBe.of(null) : this.value;
};

MayBe.prototype.chain = function(f) {
  return this.map(f).join();
};

export { MayBe };
