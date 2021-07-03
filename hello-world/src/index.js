import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
//getting error in this
// function formatuser(user)
// {
//   return user.firstName +' '+user.lastName;
// }
// const user={
//   firstName:"saurav",
//   lastName:"gupta"
// };
// function getGreeting(user){
//   if(user){
//     return <h1>Hello,{formatuser(user)}!</h1>
//   }
//   return <h1>Hello, stranger.</h1>
// }
// const element= (
//   <h1>Hello, {getGreeting(user)}! </h1>
// );
// ReactDOM.render()
// (
//   element,
//   document.getElementById('root')
// );






//3.//Rendering elements

//<div> id="root"</div> this is a root DOM node
//to render a react  element into root DOM node we pass both to ReactDOM.render():
//const element=<h1>Hello, saurav how have you been</h1>;
//ReactDOM.render(element,document.getElementById('root'));


//updating the rendered elements:since reacts elements are immutable it's not possible for us ot change the attributes of it's children,the only way to update ui is to create a new element, and pass it to ReactDOM.render().
//example:ticking clock
// function tick()
// {
//   const element=(
//     <div>
//       <h1>Hey saurav!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,2000);
//It calls ReactDOM.render() every two second from setInterval() callback.




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals







//4//components and props
//function and class components
// function welcome(props)//props is an arbitrary input
// {
//   return <h1>Hello, {props.name}</h1>
// }
//or 
// class welcome extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

//4(a)//Rendering a component
//const element=<div />;
// function w(props){
//   return <h1>Hello, {props.name}</h1>;
// }
// const e=<w name="saurav" />;
// ReactDOM.render(
//   e,document.getElementById('root')
// );



//4//(b)composing elements
//we can create an app that renders Welcome many times
function welcome(props)
{
  return <h1>Hello, {props.name}</h1>;
}
function app(){
  return(
  <div>
  <welcome name="saurav" />
  <welcome name="nikhil"/>
  <welcome name="rishabh"/>
  </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reportWebVitals();
