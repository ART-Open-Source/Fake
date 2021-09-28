var requestify = require("requestify");

console.log("Simple Tool By Soud :)\n");
requestify.get("https://soud.me/api/Fake")
.then(function(response) {
  console.log(response.getBody());
});
