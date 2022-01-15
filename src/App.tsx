import React, { Component } from "react";
import "./App.css";

class App extends Component<{}, { text?: string }> {
  private divRef = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    // Why cannot setState() be called here?!
    this.state = { text: "Hello World" };
  }

  render() {
    return (
      <div
        contentEditable
        ref={this.divRef}
        suppressContentEditableWarning={true}
        onInput={(e) => {
          this.setState({ text: e.currentTarget.innerText });
        }}
      >
        {this.state?.text}
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log(this.divRef.current?.innerText);
    console.log(this.state?.text);
    console.log(this.divRef.current?.innerText === this.state?.text);

    //return this.divRef.current?.innerHTML !== this.state?.text;
    return false;
  }
}

export default App;
