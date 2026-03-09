// //datatypes in javascript
// // primitive data types
// let name="riya"; //string
// // console.log(typeof name);
// let age =20; //number
// let isstudent =true;//boolen
// let score;
// // console.log(typeof score);  
// let car=null; //null


// // non primitive data types
// let student={name: "riya",
//     age: 20,
//     isstudent:true,
//     email: "xyz@gmail.com"
// }
// console.log(student);
// let person={name :"bob", age:25};




//*arithmetic operation 
// let a=10;
// let b=5;
// console.log(a+b);//15
// console.log(a-b);//5
// console.log(a/b);//2
// console.log(a*b);//50
// console.log(a%b);//0
// console.log(++a);//11
// console.log(a++);//11
// console.log(--a);//11
// console.log(a--);//11
// console.log(a);//10



// //assignment operators
// let a=10;
// console.log(a+=3);//a=a+3;13
// console.log(a-=3);//a=a-3;10
// console.log(a*=3);//30
// console.log(a/=3);//10
// console.log(a);//10



//comparison operator
// let a=45;
// let b="45";
// console.log(a==b);//value comparison
// console.log(a===b);//data type comparison
// console.log(a<=b);
// console.log(a>=b);


//srting operators
// let a="riya";
// let b="baisoya";
// console.log(a+b);



//ternary operator
// let age=10;
// let status =(age>=18)?"adult": "minor";
// console.log(status);


//loops and condition
// let temp=10;
// if(temp>30){
// console.log("it's hot!");
// }
// else if( temp>20){
//     console.log("it's warm.")
// }
// else{
//     console.log("it's cold");
// }



//switch caseday
// let day=3;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//         console.log("tuesday");
//         break;
//         case 3:
//             console.log("wednesday");
//             break;

//        case 4:
//             console.log("thursday");
//             break;
//         case 5:
//               console.log("friday");
//             break;
//          case 6:
//               console.log("saturday");
//               break;
//          case 7:
//             console.log("sunday");
//             break;
//          default:
//             {console.log("not other day assign");}


// }


// loops

// for(let i=0;i<5;i++){
//     console.log("for loop iteration:"+i);
// }


// let count=0;
// while(count<3){
//     console.log("while loop count:"+count);
//     count++;
// }


// let i=0;
// do{
//     console.log("do-while loop i:"+i);
//     i++;
// }while(i<2);


// let i=3;
// do{
//     console.log("do-while loop i:"+i);
//     i++;

// }while(i<2);


// array

let day = ["monday","tuesday","wednesday"];
// console.log(day);
day.push("apple");
console.log(day.length);