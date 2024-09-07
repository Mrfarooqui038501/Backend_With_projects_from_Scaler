// fs module - file  system module

const fs = require("fs"); // common js
const path = require("path");

// import fs from 'fs'; // new way to import the evvironment 


//in below code we have created our file using node 

// below  we are creating the files 
// const content = "I am learing backend"
// fs.writeFile("example.txt", content, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File successfully created")
// });    


// here we are creating the files
// const test = "I am moving a head"
//  fs.writeFile("testing2.txt", test,(err) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("Yeah!!! you file is created successfully you have done a good  job ")
//  })


//  const testing3 = "I am new test"
// here we are reading the files 
//  fs.readFile("testing2.txt","utf-8", (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

 // here we renamed our file from example.txt to testing1.txt 
//  fs.rename("example.txt", "testing1.txt", (err) =>{
//     if(err){
//         console.log(err)
//         return
//     }
// console.log("File name successfuly Updated")
// })

 // here we will check the statatics of  the files
// fs.stat('testing2.txt', (err,stats) =>{
//        if(err){
//         console.log(err)
//         return
//        }
//        console.log(stats.size)
//        console.log(stats.isDirectory()) // here we checked if it is directory or file 
//  });

// here we have created the directory 
//  const directoryName = "New created directory"
//  fs.mkdir(directoryName,(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("Directory created successfully ")
//  }) 

 // here we removed the directory
//   fs.rmdir(directoryName,{recursive: true},(err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log("Succesfully removed  the directory")
//   })

// Path module = 
/* 
# file path formats difference  in windows and linux 
for windows = C:\Users\user\file.txt
for linux/ POSIX =  /home/user/file.txt
*/

// const path = require("path")
// const fullpath = path.join("Grandparent", "Parent", "children", "Grandchildren");
// console.log(fullpath)

// const path2 = require("path")   // we can give any varaible name but in rerquire we have use path only 
// const myfullpath = path2.join("1","2","3","4","5");
// console.log(myfullpath)


// so in the below code we will get the path from root directory 
// const path = require("path")
// const absolutePath = path.resolve("Grandparent", "Parent", "children", "Grandchildren")
// console.log(absolutePath) 

// in this code  we will find filename
// const fileName = path.basename("./dir/file/file.pdf")
// console.log(fileName)

// const fileName2 = path.basename(".src/main/dir/folder/subfolder/name.docs")
// console.log(fileName2)

// in this code we wiill find the directory name 
// const dirName = path.dirname('./dir/file.txt')
// console.log(dirName)

// const dirName1 = path.basename('./mainfile/folder/subfolder/name.dir/file.jpg')
// console.log( dirName1)

//in this file we will  find the extName 
//  const extName = path.extname('./dir/file.txt')
//  console.log(extName)

//  const extName1 = path.extname('./main/sub/sub-2/file.docs')
//  console.log(extName1)


/**
 * relative  paths
 * ./-current paths
 * ../-parent directory
 * ./../../- parent of parent directory
 */

const normalizePath = path.normalize("path/to/.../file/./../name.jpg")
console.log(normalizePath)