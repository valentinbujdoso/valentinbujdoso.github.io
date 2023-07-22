

String.prototype.filter = function (banned) {
  let splitted = this.split(" ");
  return splitted.filter(w => w !== banned).join(" ")
}

Array.prototype.bubbleSort = function (){
  let length = this.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
}

console.log("Exercise 1:")
console.log("This house is not nice!".filter('not'));

console.log("Exercise 2:")
console.log([6,4,0,3,-2,1].bubbleSort())

console.log("Exercise 3:")

let Person = function (name, age) {
  this.name = name;
}

Person.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
}

let Teacher = new Person("Valentin");
console.log("First version: " + Teacher.teach("WAP"));

const person = {
  name: 'Valentin',
  Teacher: function (subject) { return name + " is now teaching " + subject;}
}

const p1 = Object.create(person);
console.log("Second version: " + p1.Teacher("WAP"));


console.log("Exercise 4: ")
console.log("Object Prototype approach: ")

const Person4 = {
  name: "unknown",
  age: 0,
  greeting:function() {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
  },
  salute() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
}

const Student4 = Object.create(Person4);
Student4.major = "unknown";
Student4.greeting = function () {
  console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

const Professor4 = Object.create(Person4);
Professor4.department = "unknown";
Professor4.greeting = function () {
  console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");
}

const professor1 = Object.create(Professor4);
professor1.department = "Department";
professor1.name = "Professor";
professor1.greeting();
professor1.salute();

const student1 = Object.create(Student4);
student1.major = "Major";
student1.name = "Student";
student1.greeting();
student1.salute();


console.log("Function Constructor approach: ")

const Person41 = function (name, age) {
  this.name = name;
  this.age = age;
}
Person41.prototype.greeting =function () {console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");}
Person41.prototype.salute =function () {console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");}

const Student41 = function (name, age, major) {
  Person41.call(this, name, age);
  this.major = major;
}
Student41.prototype = Object.create(Person41.prototype);
Student41.prototype.greeting = function () {console.log("Hey, my name is " + this.name + " and I am studying " + this.major);}

const Professor41 = function (name, age, department) {
  Person41.call(this, name, age);
  this.department = department;
}
Professor41.prototype = Object.create(Person41.prototype);
Professor41.prototype.greeting = function () {console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");}

const professor41 = new Professor41("Professor", 60, "Faculty");
professor41.greeting();
professor41.salute();

const student41 = new Student41("Valentin", 30, "Computer Science");
student41.greeting();
// student41.salute();

