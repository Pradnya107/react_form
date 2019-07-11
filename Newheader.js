import React,{Component} from 'react';
import './header.css';


class Header extends Component{
render() {
    const {websiteName}=this.props;
return (
    <div>
  <h1 className={"header"}>WebsiteName</h1>
    </div>
);
};
}
export default Header;

