import { Component } from "react";

class About2 extends Component {
  constructor(props) {
    super(props);
    console.log("this is my smallest Child constructor " + this.props.name);
  }
  componentDidMount() {
    console.log("This is smallestChild ComponentDidmOunt " + this.props.name);
  }
  render() {
    console.log("this is my render of smallestChild " + this.props.name);
    return <></>;
  }
}
export default About2;
