const models = require('./models');
const User = models.User;
const Subject = models.Subject;
const Question = models.Question;
const Explanation = models.Explanation;
const Testcase = models.Testcase;
const Solver = models.Solver;

// Create a user
// User.create({
//     name: "test user",
//     email: "test1@gmail.com",
//     password: "pass",
//     profile_image: "",
//     role:'Student',
//     createdAt: new Date(),
//     updatedAt: new Date()
// })
// .then((newUser) =>{
//     console.log(newUser);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Create a subject
// Subject.create({
//     subject_name:"cpp",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     UserId:1
// }).then((sub) =>{
//         console.log(sub);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Check associations/joins of Subject to User
// Subject.findAll({include:User})
// .then((arr)=>console.log(
//     JSON.stringify(arr)
//     ))
// .catch((err)=>{
//     console.log(err);
// })

// Create a question
// Question.create({
//     question_text: "Given an array of integers, find the sum of its elements.",
//     example: "For example, if the array arr=[1,2,3], 1+2+3=6 so return 6 ",
//     function_description: "Complete the simpleArraySum function in the editor below. simpleArraySum has the following parameter(s):ar: an array of integers",
//     return: "return the sum of the array elements as an integer.",
//     input_format: "The first line contains an integer, , denoting the size of the array. The second line contains  space-separated integers representing the array's elements.",
//     output_format: "Print the sum of the array's elements as a single integer.",
//     constraint: "0< n,ar[i]<=1000",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     SubjectId:1
// }).then((newQuestion) => {
//     console.log(newQuestion);
// }).catch((err) => {
//     console.log(err);
// })

// Check associations/joins of Question to Subject
// Question.findAll({include:Subject})
// .then((question) => {
//     console.log(JSON.stringify(question));
// }).catch((err) => {
//     console.log(err);
// })

// Create a explanation
// Explanation.create({
//     sample_input: " some input 1",
//     sample_output: " some output 1 ",
//     explanation_statment: " some explanation 1 ",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     QuestionId:1
// }).then((newExaplantion) => {
//     console.log(newExaplantion);
// }).catch((err) => {
//     console.log(err);
// })

// Check associations/joins of Explanation to Question
// Explanation.findAll({include:Question})
// .then((expl) => {
//     console.log(JSON.stringify(expl));
// }).catch((err) => {
//     console.log(err);
// })

// Create a Testcase
// Testcase.create({
//     test_input: "1",
//     test_output: "true",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     QuestionId:1
// }).then((newTest) => {
//     console.log(newTest);
// }).catch((err) => {
//     console.log(err);
// })

// Check associations/joins of Testcase to Question
// Testcase.findAll({include:Question})
// .then((test) => {
//     console.log(JSON.stringify(test));
// }).catch((err) => {
//     console.log(err);
// })

// Create a solver enrty
// Solver.create({
//     plag_score: 5,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     QuestionId:1,
//     UserId:1
// }).then((newEntry) => {
//         console.log(newEntry);
//     }).catch((err) => {
//         console.log(err);
//     })

// Check associations/joins of Question - to - Users through Solvers
// Solver.findAll({
//     include:[Question,User]
// }).then((submission) => {
//         console.log(JSON.stringify(submission));
//     }).catch((err) => {
//         console.log(err);
//     })