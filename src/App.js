import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { WinboxProvider, WinboxContext } from "./Winbox";

/**
 *
 * @description child component pass to winbox
 */
const Component2 = () => {
  const { data } = useSelector((status) => status);
  return <div>{JSON.stringify(data)}</div>;
};
/**
 *
 *
 * @description call winbox with any component use of useContext
 */
const Button = ({ children }) => {
  const { CallWinBox } = useContext(WinboxContext);
  return (
    <button
      onClick={CallWinBox.bind(this, {
        title: "anuj",
        id: "anuj_ud",
        childComp: <Component2 />,
      })}
    >
      {children}
    </button>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comp1: false,
      comp2: false,
      comp3: false,
    };
  }
  render() {
    return (
      /**
       * @description set this provider to root element. i will available entire application
       */
      <WinboxProvider>
        <div>
          data
          <Button handler={this.firstVisible1}>winbox 1</Button>
          <Button handler={this.firstVisible2}>winbox 2</Button>
          <Button handler={this.firstVisible3}>winbox 3</Button>
        </div>
      </WinboxProvider>
    );
  }
}

export default App;
