//Question1-Hw5

// let user = {
//     name: "John",
//     age: 30,
//     sayHello: function() {
//       console.log("Hello " + this.name);
//     }
//   };
  
//   user.sayHello(); // فراخوانی متد sayHello

//Question2-Hw5

// increase

// let pedometer = {
//     stepCount: 0,
//     increase: function() {
//       this.stepCount++;
//     }
//   };


//   console.log(pedometer.stepCount); // خروجی: 0

// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 1

// pedometer.increase();
// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 3

// decrease

// let pedometer = {
//     stepCount: 0,
//     increase: function() {
//       this.stepCount++;
//     },
//     decrease: function() {
//       if (this.stepCount > 0) {
//         this.stepCount--;
//       }
//     }
//   };

//   console.log(pedometer.stepCount); // خروجی: 0

// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 1

// pedometer.increase();
// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 3

// pedometer.decrease();
// console.log(pedometer.stepCount); // خروجی: 2

// pedometer.decrease();
// pedometer.decrease();
// console.log(pedometer.stepCount); // خروجی: 0

// pedometer.decrease();
// console.log(pedometer.stepCount); // خروجی: 0 (هیچ کاهشی انجام نمی‌شود چون تعداد قدم‌ها قبلاً صفر شده است)


//reset

// let pedometer = {
//     stepCount: 0,
//     increase: function() {
//       this.stepCount++;
//     },
//     decrease: function() {
//       if (this.stepCount > 0) {
//         this.stepCount--;
//       }
//     },
//     reset: function() {
//       this.stepCount = 0;
//     }
//   };

//   console.log(pedometer.stepCount); // خروجی: 0

// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 1

// pedometer.increase();
// pedometer.increase();
// console.log(pedometer.stepCount); // خروجی: 3

// pedometer.decrease();
// console.log(pedometer.stepCount); // خروجی: 2

// pedometer.reset();
// console.log(pedometer.stepCount); // خروجی: 0

//read

// let pedometer = {
//     stepCount: 0,
//     increase: function() {
//       this.stepCount++;
//     },
//     decrease: function() {
//       if (this.stepCount > 0) {
//         this.stepCount--;
//       }
//     },
//     reset: function() {
//       this.stepCount = 0;
//     },
//     read: function() {
//       console.log("تعداد قدم‌ها: " + this.stepCount);
//     }
//   };

//   pedometer.read(); // خروجی: تعداد قدم‌ها: 0

// pedometer.increase();
// pedometer.increase();
// pedometer.increase();
// pedometer.read(); // خروجی: تعداد قدم‌ها: 3

// pedometer.decrease();
// pedometer.read(); // خروجی: تعداد قدم‌ها: 2

// pedometer.reset();
// pedometer.read(); // خروجی: تعداد قدم‌ها: 0


//Question3-Hw5

// function sortByAge(people) {
//     people.sort(function(a, b) {
//       return a.age - b.age;
//     });
//   }
  
//   // مثال استفاده از تابع sortByAge
  
//   let people = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 20 }
//   ];
  
//   console.log("قبل از مرتب‌سازی:");
//   console.log(people);
  
//   sortByAge(people);
  
//   console.log("بعد از مرتب‌سازی:");
//   console.log(people);

//Question4-Hw5

// function showNotification(message, position, className) {
//     const notification = document.createElement("div");
//     notification.textContent = message;
//     notification.className = `notification ${className}`;
  
//     // تنظیم موقعیت پیام
//     switch (position) {
//       case "top-left":
//         notification.style.top = "10px";
//         notification.style.left = "10px";
//         break;
//       case "top-right":
//         notification.style.top = "10px";
//         notification.style.right = "10px";
//         break;
//       case "bottom-left":
//         notification.style.bottom = "10px";
//         notification.style.left = "10px";
//         break;
//       case "bottom-right":
//         notification.style.bottom = "10px";
//         notification.style.right = "10px";
//         break;
//       default:
//         break;
//     }
  
//     // الحاق پیام به صفحه
//     document.body.appendChild(notification);
  
//     // پاک کردن پیام پس از مدت زمانی مشخص
//     setTimeout(function() {
//       document.body.removeChild(notification);
//     }, 5000); // مدت زمان پیام (اینجا 5000 میلی‌ثانیه، یعنی 5 ثانیه) قابل تنظیم است
//   }

//Question5-Hw5

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   };
  
//   ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
//   );

