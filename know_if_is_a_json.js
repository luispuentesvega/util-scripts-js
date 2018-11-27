function isJson(item) {
  item = typeof item !== "string"
      ? JSON.stringify(item)
          : item;
  try {
          item = JSON.parse(item);
  } catch (e) {
      return false;
  }
  if (typeof item === "object" && item !== null) {
    return true;
  }
  return false;
}

console.log(isJson('{"Luis"}'));//False
console.log(isJson('12121'));//False
console.log(isJson('{ "name":"John", "age":30, "car":null }'));//True