import React,{compoent} from 'react';
const Header=function(){
    const headerstyle={textAlign:'center',padding:20,background:'#000',color:'#fff',textTransform:'uppercase'};
    return(
        <div style={headerstyle}>
        Phone directory
      </div>
    )
}
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//          Phone directory
//        </div>

//         )
//     }
// }
export default Header;