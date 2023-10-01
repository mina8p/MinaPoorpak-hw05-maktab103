//question1
const user = {
    name: "John",
    age: 30,
    sayHello: function () {
      return `Hello ${this.name}`;
    },
  };
  console.log(user.sayHello());
  
  //question2
  class pedometer {
    constructor() {
      this.steps = 0;
    }
    increase() {
      this.steps++;
    }
    decrease() {
      this.steps--;
    }
    reset() {
      this.steps = 0;
    }
    read() {
      console.log(`تعداد قدم ها: ${this.steps}`);
    }
  }
  const myStepCounter = new pedometer();
  
  myStepCounter.increase();
  myStepCounter.increase();
  myStepCounter.increase();
  myStepCounter.read(); // تعداد قدم ها: 3
  
  myStepCounter.decrease();
  myStepCounter.read(); // تعداد قدم ها: 2
  
  myStepCounter.reset();
  myStepCounter.read(); // تعداد قدم ها: 0
  
  //question3
  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
    return arr;
  }
  let people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 },
  ];
  console.log(sortByAge(people));
  // خروجی: [{ name: "Bob", age: 20 }, { name: "John", age: 25 }, { name: "Jane", age: 30 }]
  
  //question4
  
  
  //question5
  const ask = (question, yes, no) => (confirm(question) ? yes() : no());
  ask("Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  