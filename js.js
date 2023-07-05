

// // // 1. Class declarations
// // class Person{
// //     constructor(name, age){
// //         // fields
// //         this.name = name;
// //         this.age = age;
// //     }
// //     //methods
// //     speak(){
// //         console.log(`${this.name}: hello!`)
// //     }
// // }

// const { rejects } = require("assert")
// const { error } = require("console")
// const { resolve } = require("path")

// // const leo = new Person("leo", 20)
// // console.log(leo.name)
// // console.log(leo.age)
// // leo.speak();

// // // 2. Getter and setters
// // class User{
// //     constructor(firstName, lastName, age){
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //         this.age = age;
// //     }
// //     //get은 값을 return
// //     get age(){
// //         return this.age;
// //     }
// //     // set 값을 설정 한다
// //     set age(value){
// //         this.age = value;
// //     }
// // }

// // const user1 = new User("Steve", "Job", -1)
// // console.log(user1.age) // -1 

// // // 3. Fields (public, private)

// // class Experiment{
// //     publicField = 2;
// //     privateField = 0;
// // }

// // const experiment = new Experiment();
// // console.log(experiment.publicField);
// // console.log(experiment.privateField);

// // // 4 Static properties and methods

// // class Artical{
// //     static publisher = "Dream Coding";
// //     constructor(articleNumber){
// //         this.articleNumber = articleNumber;
// //     }

// //     static printPublisher(){
// //         console.log(Article.publisher);
// //     }
// // }

// // const article1 = new Artical(1); // undefined
// // const article2 = new Artical(2); // undefined
// // console.log(Artical.publisher); // Dream Coding
// // Artical.printPublisher(); // Dream Coding

