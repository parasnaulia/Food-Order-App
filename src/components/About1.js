import { Component } from "react";
import About2 from "./About2";

class About1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter2: 0,
    };
    console.log("This is Child constructor " + this.props.name);
  }
  handleChange = () => {
    // console.log("This is Clicked");
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleChange1 = () => {
    // console.log("This is Clicked");
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  };
  componentDidMount() {
    console.log("This is Child componentDidMount " + this.props.name);
  }
  render() {
    console.log("this is child Render " + this.props.name);
    return (
      <>
        <div>
          <h1>
            This is my about1 page I am {this.props.name} and my age is
            {this.props.age} {this.state.counter} counter is{" "}
            {this.state.counter2}
            <button
              onClick={() => {
                this.handleChange();
              }}
            >
              Clicked
            </button>
            <button
              onClick={() => {
                this.handleChange1();
              }}
            >
              Clicked
            </button>
          </h1>
        </div>
        <About2 name={"piddu"} />
      </>
    );
  }
}
export default About1;
