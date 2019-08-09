const Views = {
  index: i => console.log(i),
  show: i => console.log(i)
};

const Db = {
  create: attr => console.log(attr)
};

// Bad code
var BlogController = (function() {
  var index = function(posts) {
    return Views.index(posts);
  };
  var show = function(posts) {
    return Views.show(posts);
  };
  var create = function(attr) {
    return Db.create(attr);
  };
  var update = function(posts, attr) {
    return Db.update(posts, attr);
  };
  var destroy = function(post) {
    return Db.destroy(post);
  };
  return { index, show, create, update, destroy };
})();

// pretty code
var BlogController1 = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy
};

// Bad code
//httpGet("/post/2", json => renderPost(json));

// pretty code
// httpGet("/post/2", renderPost);

const memoized = fn => {
  const cache = [];
  return arg => cache[arg] || (cache[arg] = fn(arg));
};
