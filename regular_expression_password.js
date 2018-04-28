var string = "1%%%%";
var re = new RegExp("^([a-zA-Z0-9_]+)$");
if (re.test(string)) {
    console.log("Valid");
} else {
    console.log("Invalid");
}