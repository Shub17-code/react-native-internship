// Global scope
let name = "Suhani";

function showName() {
  console.log("Inside function:", name);
}

showName();

// Local scope
function testScope() {
  let age = 20;
  console.log("Inside:", age);
}

testScope();

// console.log(age); ❌ error (not accessible outside)
