class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Nucamp",
    };
  }

  render() {
    const course = "React";
    return (
      <div>
        <span className="blue-box">{this.state.bootcamp}</span>
        <span className="orange-box">{course}</span>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
