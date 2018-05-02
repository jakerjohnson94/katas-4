//

//

const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad"
];
const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

const wrap = document.getElementById("wrap");
function appendArr(content) {
  const div = document.createElement("div");
  div.textContent = JSON.stringify(content);
  wrap.appendChild(div);
}
function appendStr(content) {
  const div = document.createElement("div");
  div.textContent = content;
  wrap.appendChild(div);
}
function appendH(content) {
  const h1 = document.createElement("h1");
  h1.textContent = content;
  wrap.appendChild(h1);
}

function katas1(str) {
  appendH("Display an array from the cities in gotCitiesCSV");
  appendArr(str.split(","));
}
function katas2(str) {
  appendH("Display an array of words from the sentence in bestThing");
  appendArr(str.split(" "));
}
function katas3(str) {
  appendH(
    "Display a string separated by semi-colons instead of commas from gotCitiesCSV"
  );
  appendStr(str.replace(/,/g, ";"));
}
function katas4(arr) {
  appendH("Display a CSV (comma-separated) string from the lotrCitiesArray");

  appendStr(arr.slice(","));
}
function katas5(arr) {
  appendH("Display the first 5 cities in lotrCitiesArray");
  appendArr(arr.slice(0, 5));
}
function katas6(arr) {
  appendH("Display the last 5 cities in lotrCitiesArray");
  appendArr(arr.slice(-5));
}
function katas7(arr) {
  appendH("isplay the 3rd to 5th city in lotrCitiesArray");
  appendArr(arr.slice(2, 5));
}
function katas8(arr) {
  appendH('Using splice, remove "Rohan" from lotrCitiesArray');
  arr.splice(2, 1);
  appendArr(arr);
}
function katas9(arr) {
  appendH(
    'Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray'
  );
  arr.splice(5, 2);
  appendArr(arr);
}
function katas10(arr) {
  appendH(
    'Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"'
  );
  arr.splice(2, 0, "Rohan");
  appendArr(arr);
}
function katas11(arr) {
  appendH(
    'Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray"'
  );
  arr.splice(-1, 1, "Deadest Marshes");
  appendArr(arr);
}

function katas12(str) {
  appendH("Using slice, display the first 14 characters from bestThing");
  appendStr(str.slice(0, 14));
}
function katas13(str) {
  appendH("Using slice, display the last 12 characters from bestThing");
  appendStr(str.slice(-12));
}
function katas14(str) {
  appendH(
    "Using slice, display characters between the 23rd and 38th position of bestThing"
  );
  appendStr(str.slice(23, 38));
}
function katas15(str) {
  appendH("Repeat #13 using substring instead of slice.");
  appendStr(str.substring(str.length - 12));
}
function katas16(str) {
  appendH("Repeat #14 using substr instead of slice.");
  appendStr(str.substr(23, 15));
}
function katas17(str) {
  appendH("Find and display the index of 'only' in bestThing");
  appendStr(str.indexOf("only"));
}
function katas18(str) {
  appendH("Find and display the index of the last word in bestThing");
  appendStr(str.lastIndexOf(" ") + 1);
}

function katas19(str) {
  appendH( "Find and display all cities from gotCitiesCSV  that use double vowel");
  const arr = str.split(",");
   result =  arr.filter((string)=>/([a-z])\1+/.test(string));
  appendArr(result);
}

function katas20(arr) {
  appendH("Find and display all cities from lotrCitiesArray that end with 'or' ");
  const stringArr = [];
  for (s in arr) {
    arr[s].endsWith("or") ? stringArr.push(" " + arr[s]) : null;
  }
  appendStr(stringArr);
}
function katas21(str) {
  appendH("Find and display all the words in bestThing that start with a 'b'");
  const strings = str.split(" ");
  const stringArr = [];
  for (string in strings) {
    strings[string].startsWith("b")
      ? stringArr.push(" " + strings[string])
      : null;
  }
  appendStr(stringArr);
}
function katas22(arr) {
  appendH(' Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"');
  const inc = arr.includes("Mirkwood") ? "Yes" : "No";
  appendStr(inc);
}
function katas23(arr) {
  appendH('Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"');
  const inc = arr.includes("Hollywood") ? "Yes" : "No";
  appendStr(inc);
}
function katas24(arr) {
  appendH(' Display the index of "Mirkwood" in lotrCitiesArray');
  const r = arr.indexOf("Mirkwood")
  appendArr(r);
}
function katas25(arr) {
  appendH( "Find and display the first city in lotrCitiesArray that has more than one word");
  const result = arr.find((n)=> n.includes(' '));
  appendStr(result);
}
function katas26(arr) {
  appendH(" Reverse the order in lotrCitiesArray");
  appendArr(arr.reverse());
}
function katas27(arr) {
  appendH("Sort lotrCitiesArray alphabetically");
  appendArr(arr.sort());
}
function katas28(arr) {
  appendH(
    "Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)"
  );
  appendStr(arr.sort((a,b)=>a.length>b.length));
}
function katas29and30(arr) {
  appendH("Using pop, remove the last city from lotrCitiesArray");
 const pop = arr.pop()
  appendArr(arr);

  appendH("Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array");
  arr.push(pop)
  appendArr(arr);
}
function katas31and32(arr) {
  appendH("Using shift, remove the first city from lotrCitiesArray");
  const s = arr.shift()
  appendArr(arr);

  appendH(" Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array");
  arr.unshift(s)
  appendArr(arr);
}

function runKatas() {
  katas1(gotCitiesCSV);
  katas2(bestThing);
  katas3(gotCitiesCSV);
  katas4(lotrCitiesArray);
  katas5(lotrCitiesArray);
  katas6(lotrCitiesArray);
  katas7(lotrCitiesArray);
  katas8(lotrCitiesArray);
  katas9(lotrCitiesArray);
  katas10(lotrCitiesArray);
  katas11(lotrCitiesArray);
  katas12(bestThing);
  katas13(bestThing);
  katas14(bestThing);
  katas15(bestThing);
  katas16(bestThing);
  katas17(bestThing);
  katas18(bestThing);
     katas19(gotCitiesCSV);
  katas20(lotrCitiesArray);
  katas21(bestThing);
  katas22(lotrCitiesArray);
  katas23(lotrCitiesArray);
  katas24(lotrCitiesArray);
    katas25(lotrCitiesArray);
     katas26(lotrCitiesArray);
    katas27(lotrCitiesArray);
     katas28(lotrCitiesArray);
    katas29and30(lotrCitiesArray);
     katas31and32(lotrCitiesArray);

}
runKatas();
