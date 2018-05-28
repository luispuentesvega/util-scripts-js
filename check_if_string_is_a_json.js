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

console.log(isJson('Luis'));//false
console.log(isJson('{"name":"Luis"}'));//true
console.log(isJson('{"name":"Luis"'));//false