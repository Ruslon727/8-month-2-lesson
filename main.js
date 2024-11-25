"use strict";
// 1-masala
// let promptValue:string | null = prompt("Son kiriting!")
// let arr:string[] = []
// if(promptValue){
//     arr.push(promptValue)
// }
// console.log(arr)
// 2-masala
// let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function maxValue(arr:number[]) {
//     let Value = Math.max(...arr)
//     console.log(Value);
// }
// maxValue(list);
// 3-masala
// let username: string | null = prompt("Ism kiriting!")
// let usersNameList: string[] = ["Ulug'bek", "Firdavsxon", "Boburjon", "Rixsitilla", "Ruslonbek"]
// let isValid: number = 0
// function fn(name: string | null, list: string[]) {
//     list.forEach((item: string) => item == name ? isValid += 1 : isValid)
// }
// fn(username, usersNameList)
// console.log(isValid ? "Bor" : "Yo'q")
// 4-masala
// function juftNum(arr: number[]): number[] {
//     return arr.filter(num => num % 2 === 0);
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sortNum = juftNum(number);
// console.log(sortNum);
// 5-masala
// function arrNum(arr: number[]): number {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// const numbers: number[] = [1, 2, 3, 4, 5];
// const sum: number = arrNum(numbers);
// console.log(`Arraydagi raqamlarning yig'indisi: ${sum}`);
// 6-masala
// type User = {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     address: string;
// };
// function UserFn(users: User[]): { name: string; email: string }[] {
//     return users.map(user => ({
//         name: user.name,
//         email: user.email
//     }));
// }
// const users: User[] = [
//     { id: 1, name: "Ruslonbek Komilov", email: "komilovruslonbek@gmail.com", password: "123", address: "Yunusabad 14kv" },
// ];
// const res = UserFn(users);
// console.log(res);
// 7-masala
// type User = {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     address: string;
// };
// function AddressFn(users: User[], id: number): string | null {
//     const user = users.find(user => user.id === id); 
//     return user ? user.address : null; 
// }
// const users: User[] = [
//     { id: 1, name: "John Doe", email: "john@example.com", password: "123456", address: "123 Main St" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", password: "abcdef", address: "456 Oak Ave" },
//     { id: 3, name: "Mike Johnson", email: "mike@example.com", password: "qwerty", address: "789 Pine Rd" },
//     { id: 4, name: "Emily Brown", email: "emily@example.com", password: "password", address: "101 Maple St" },
//     { id: 5, name: "Chris Davis", email: "chris@example.com", password: "letmein", address: "202 Birch Blvd" },
//     { id: 6, name: "Sarah Wilson", email: "sarah@example.com", password: "iloveyou", address: "303 Elm St" },
//     { id: 7, name: "Paul Lee", email: "paul@example.com", password: "welcome", address: "404 Cedar Ct" },
//     { id: 8, name: "Laura Adams", email: "laura@example.com", password: "monkey123", address: "505 Spruce Ln" },
//     { id: 9, name: "Daniel Clark", email: "daniel@example.com", password: "password1", address: "606 Willow Way" },
//     { id: 10, name: "Sophia Martinez", email: "sophia@example.com", password: "pass1234", address: "707 Aspen Dr" },
// ];
// const id = 5;
// const address = AddressFn(users, id);
// if (address) {
//     console.log(`ID ${id} uchun address: ${address}`);
// } else {
//     console.log(`ID ${id} uchun user topilmadi.`);
// }
// 8-masala
// type User = {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     address: string;
// };
// function NameFn(users: User[]): string[] {
//     return users.map(user => user.name);
// }
// const users: User[] = [
//     { id: 1, name: "Ruslonbek", email: "sardor@gmail.com", password: "123456", address: "Yunusabad" },
//     { id: 2, name: "Ulug'bek", email: "ulugbek@gmail.com", password: "abcdef", address: "Chilonzor" },
//     { id: 3, name: "Sardor", email: "sardor@gmail.com", password: "qwerty", address: "Sergeli" },
// ];
// const names = NameFn(users);
// console.log(names);
// 9-masala
// function MaxNumFn(array1: number[], array2: number[]): string[] {
//     const max1 = Math.max(...array1);
//     const max2 = Math.max(...array2);
//     return [max1.toString(), max2.toString()];
// }
// const numbers1 = [12, 45, 78, 34, 56];
// const numbers2 = [88, 67, 93, 29, 40];
// const result = MaxNumFn(numbers1, numbers2);
// console.log(result);
// 10-masala
// function JuftVaToqNumFn(numbers: number[]): { juftNum: number[]; toqNum: number[] } {
//     const juftNum = numbers.filter(num => num % 2 === 0);
//     const toqNum = numbers.filter(num => num % 2 !== 0);
//     return { juftNum, toqNum };
// }
// const numbers = [-10, -3, 0, 4, 7, 12, -9, 5, 8];
// const { juftNum, toqNum } = JuftVaToqNumFn(numbers);
// console.log("Juft raqamlar:", juftNum);
// console.log("Toq raqamlar:", toqNum);
