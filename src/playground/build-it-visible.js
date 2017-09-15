// let btnText = 'Show details';
// let btnText2 = "Hide details";
// let text = 'This is the secret text !';
// let judge = false;

// const onClickHandle = () => {
//     judge = !judge;
//     render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onClickHandle}>{judge ? btnText2 : btnText}</button>
//       {judge ? <p>{text}</p> : ""}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibilty: false
    }

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Text" : "Show Text"}</button>
        {this.state.visibility ? <p>This is a secret text!</p> : ""}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
