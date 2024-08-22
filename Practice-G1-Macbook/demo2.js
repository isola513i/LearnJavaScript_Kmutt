function detailedType(value) {
  if (Array.isArray(value)) return "array";
  if (value == null) return "null";
  return typeof value;
}
console.log(detailedType("hello"));
console.log(detailedType(true));
console.log(detailedType(123));
console.log(detailedType({}));
console.log(detailedType([]));
console.log(detailedType(null));
console.log(detailedType(function () {}));
console.log(detailedType(undefined));
console.log(detailedType(Symbol()));
