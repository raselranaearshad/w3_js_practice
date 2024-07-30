// String indexOf() Method
let txt = "Please locate where 'locate' occurs!";
document.write(txt.indexOf("Locate") + "<br>");

// String lastIndexOf() Method
let text = "Please Please Please locate where 'locate' occurs.";
document.write(text.lastIndexOf("Please") + "<br>");

// String search() Method
let x = "Please locate where 'Please' occurs!";
document.write(x.search(/locate/) + "<br>");

// String match() Method
let y = "The rain in SPAIN stays mainly in the plain";
document.write(y.match(/ain/gi) + "<br>");

// String matchAll() Method
let iterator = 'I love cats. Cats are very easy to love. Cats are very popular.';
const showR = iterator.matchAll("Cats");
document.write(Array.from(showR) + "<br>");