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
      sayi2:0,
      nameVisible:'block',
      visibleBtnVal:"Hide"
    }
  }
  componentDidMount() {
    console.log("Component did mount");
  }
 
  render() {
    const{sayi1,sayi2,nameVisible,visibleBtnVal}=this.state;
    const toplam=parseInt(sayi1)+parseInt(sayi2);
    console.log("render ");
    return (
      <div className="App">
        <div><input type='button' value={visibleBtnVal}
        onClick={()=>{
          console.log("namevisible="+nameVisible);
          this.setState(()=>{
            return{nameVisible:nameVisible=="block"?"none":"block",
                  visibleBtnVal:visibleBtnVal=="Hide"?"Show":"Hide"
          }
          });

          
        }}
        /></div>
        <div style={{display: nameVisible}}>
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
</div>
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


<Toplama yazi={"merhaba ben islem componenti1"} islem={"t"} />
<Toplama yazi={"merhaba ben islem componenti2"} islem={"c"} />
<Toplama yazi={"merhaba ben islem componenti2"} islem={"f"} />
<Toplama yazi={"merhaba ben islem componenti2"} islem={"b"} />
      </div>

    );
  }
}

export default App;
