// Resume format using
var resume = {
  Name: "Pavithra",
  Age: "27",
  Qualification: ["10th", "12th", "MCA"],
  Location: "chennai",
  Gender: "Female",
  Language_Known: ["Tamil", "English"],
};
console.log(resume);

// JSON For loops (for,for in,for of,foreach)
var resume = {
  Name: "Pavithra",
  Age: "27",
  Qualification: ["10th", "12th", "MCA"],
  location: "chennai",
  Gender: "Female",
  Language_Known: ["Tamil", "English"],
};
console.log(resume);
//for loop
for (var i = 0; i < resume.Qualification.length; i++) {
  console.log(resume.Qualification[i]);
}

// for in loop
for (var i in resume.Qualification) {
  console.log(i, resume.Qualification[i]);
}

// for of loop
for (var myself of resume.Language_Known) {
  console.log(myself);
}

//OUTPUT
//{Name: 'Pavithra', Age: '27', Qualification: Array(3), Location: 'chennai', Gender: 'Female', …}Age: "27"Gender: "Female"Language_Known: (2) ['Tamil', 'English']Location: "chennai"Name: "Pavithra"Qualification: (3) ['10th', '12th', 'MCA'][[Prototype]]: Object
//script.js:23 {Name: 'Pavithra', Age: '27', Qualification: Array(3), location: 'chennai', Gender: 'Female', …}
//script.js:26 10th
//script.js:26 12th
//script.js:26 MCA
//script.js:32 0 10th
//script.js:32 1 12th
//script.js:32 2 MCA
//script.js:38 Tamil
//script.js:38 English
