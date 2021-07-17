import React,{useState} from 'react';
import './App.css';
// import WinboxReact from 'winbox-react'
import 'winbox-react/dist/index.css'
import { useSelector, Provider } from 'react-redux';
import store from "./store/store"
import 'winbox';
import ReactDOM from "react-dom"


const Component2 = () =>{
  const {data} = useSelector(status=>status)
  return <div>{JSON.stringify(data)}</div>
}

class App extends React.Component {
  componentDidMount() {
    /**
     * @description you need to do these things 
     */
    var div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <Component2 />
      </Provider>, div );
    /**
     * @description you can use any one  winbox-react or only WinBox 
     * he is already using a wrapper component
     */
    window.WinBox.new({
      mount:div
    });
  }

  componentWillUnmount() {
    // this.$el.somePlugin('destroy');
  }

  render() {
    return <div>data</div>
  }
}

export default App;

// const WinBoxComponent = ({id,title, compHtml}) =>{
//   window.WinBox.new({
//       mount:div
//     });

// }



