import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Toplama from './Toplama.component';
class App extends Component {
  constructor() {
    super();
    console.log("contructor");
    this.state = {
      name: 'ibrahim',
      surname: 'yazici',
      sayi1:0,
      sayi2:0
    }
  }
  componentDidMount() {
    console.log("Component did mount");
  }
 
  render() {
    const{sayi1,sayi2}=this.state;
    const toplam=parseInt(sayi1)+parseInt(sayi2);
    console.log("render ");
    return (
      <div className="App">
        <div>
          ad: {this.state.name}
        </div>
        <div>
          Soyad:{this.state.surname}
        </div>
        <div>
          <input type="text" onChange={(event) => {
            this.setState(() => {
              return {
                name: event.target.value
              }
            })
          }} />
        </div>
        <div>{this.state.name}</div>
        <div><input type='text' value={this.state.name} onChange={(event) => {
          this.setState(() => {
            return {
              name: event.target.value
            }
          })
        }} /></div>

        <div>
          <input type="text" onChange={(event)=>{
              this.setState(()=>{
                return {
                  sayi1:event.target.value
                };
              }
              )
          }} value={sayi1} />+
          <input type="text" onChange={(event)=>{
            this.setState(()=>{
              return{sayi2:event.target.value}
            })
          }} value={sayi2} />
        </div>
        <div>
          <input  type="text" value={toplam} />
        </div>

<Toplama  yazi={"1. component"}/>
<Toplama yazi={"merhaba ben component"} />
      </div>

    );
  }
}

export default App;
