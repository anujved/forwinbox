import React from 'react';
import { useSelector} from 'react-redux';
import WinboxWrapper from "./Winbox"

const Component2 = () =>{
  const {data} = useSelector(status=>status)
  return <div>{JSON.stringify(data)}</div>
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      comp1:false,
      comp2:false,
      comp3:false
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    // this.$el.somePlugin('destroy');
  }

  firstVisible1 = () =>this.setState({...this.state,comp1:true})
  firstVisible2 = () =>this.setState({...this.state,comp1:true})
  firstVisible3 = () =>this.setState({...this.state,comp1:true})
  closeFire = (e) =>{
    console.log(e);
  }

  render() {
     
    return <div>
          data
          <WinboxWrapper title="anuj" id="anuj_1" isvisible={this.state.comp1} closeHelper={this.closeFire}>
            <Component2 />
          </WinboxWrapper>
          <WinboxWrapper title="anuj" id="anuj_2" isvisible={this.state.comp2}>
            <Component2 />
          </WinboxWrapper>
          <WinboxWrapper title="anuj" id="anuj_3" isvisible={this.state.comp2}>
            <Component2 />
          </WinboxWrapper>
          <button onClick={this.firstVisible1}>
            winbox 1
          </button>
          <button onClick={this.firstVisible2}>
            winbox 2
          </button>
          <button onClick={this.firstVisible3}>
            winbox 3
          </button>
      </div>
  }
}

export default App;





