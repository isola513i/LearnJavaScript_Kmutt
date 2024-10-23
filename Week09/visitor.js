function visitor(initialValue) {
  let visit = initialValue;
  function getVisitor() {
    return visit;
  }
  return getVisitor;
}

const x = visitor();
console.log(x); // [Function: getVisitor]
console.log(x());
