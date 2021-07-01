import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//1.// const name='saurav kumar gupta';//declaring a variable
// const element=<h1>Hello,{name}</h1>;//Embedded expression using jsx
// ReactDOM.render(
//   <h1>Hello, world</h1>,
//   document.getElementById('root')
// );



//2.// function formatuser(user){//this function describes how we can use javascript function
//   return user.firstName+' '+user.lastName;
// }
// const user={ //wrapping this in parenthesis for avoiding the pitfalls of automatic semicolon insertion
//   firstName:'saurav',
//   lastName:'gupta'
// };
// const element=(
//   <h1>Hello, {formatuser(user)}</h1>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


//jsx in an expression too
function formatuser(user)
{
  return user.firstName +' '+user.lastName;
}
const user={
  firstName:"saurav",
  lastName:"gupta"
};
function getGreeting(user){
  if(user){
    return <h1>Hello,{formatuser(user)}!</h1>
  }
  return <h1>Hello, stranger.</h1>
}
const element= (
  <h1>Hello, {getGreeting(user)}! </h1>
);
ReactDOM.render()
(
  element,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
