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
      sayi1: 0,
      sayi2: 0,
      nameVisible: 'none',
      visibleBtnVal: "Show",
      islemVisible: "none",
      visibleBtnIslemVal: "Show",
      ogrenciler: [
        {
          ad: "ibrahim",
          soyad: "yazıcı",
          tel: "5555555"
        },
        {
          ad: "Kaan",
          soyad: "Karalı",
          tel: "4444444"
        },
        {
          ad: "Çağatay",
          soyad: "Kamit",
          tel: "33333333"
        },
        {
          ad: "Eredem",
          soyad: "Kalafat",
          tel: "2222226"
        }
      ]
    }
  }
  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    const { sayi1, sayi2, nameVisible, visibleBtnVal, islemVisible, visibleBtnIslemVal,ogrenciler } = this.state;
    const toplam = parseInt(sayi1) + parseInt(sayi2);
    console.log("render ");
    let yeniOgrenciAd="";
    let yeniOgrenciSoyAd="";
    let yeniOgrenciTel="";
    

    return (
      <div className="App">
        <div><input type='button' value={visibleBtnVal}
          onClick={() => {
            console.log("namevisible=" + nameVisible);
            this.setState(() => {
              return {
                nameVisible: nameVisible == "block" ? "none" : "block",
                visibleBtnVal: visibleBtnVal == "Hide" ? "Show" : "Hide"
              }
            });


          }}
        />
          <input type='button' value={visibleBtnIslemVal}
            onClick={() => {

              this.setState(() => {
                return {
                  islemVisible: islemVisible == "block" ? "none" : "block",
                  visibleBtnIslemVal: visibleBtnIslemVal == "Hide" ? "Show" : "Hide"
                }
              });


            }}
          />

        </div>
        <div style={{ display: nameVisible }}>
          <div>
            ad: {this.state.name}
          </div>
          <div>
            Soyad:{this.state.surname}
          </div>
          <div >
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
        <div style={{ display: islemVisible }}>
          <div>
            <input type="text" onChange={(event) => {
              this.setState(() => {
                return {
                  sayi1: event.target.value
                };
              }
              )
            }} value={sayi1} />+
            <input type="text" onChange={(event) => {
              this.setState(() => {
                return { sayi2: event.target.value }
              })
            }} value={sayi2} />
          </div>
          <div>
            <input type="text" value={toplam} />
          </div>



          <Toplama yazi={"merhaba ben islem componenti1"} islem={"t"} />
          <Toplama yazi={"merhaba ben islem componenti2"} islem={"c"} />
          <Toplama yazi={"merhaba ben islem componenti2"} islem={"f"} />
          <Toplama yazi={"merhaba ben islem componenti2"} islem={"b"} />
        </div>

<div>
  ad:<input type="text"  onChange={(event)=>{
yeniOgrenciAd=event.target.value;
  }} />
  Soyad:<input type="text"  onChange={(event)=>{
yeniOgrenciSoyAd=event.target.value;
  }} />
  Tel:<input type="text" onChange={(event)=>{
yeniOgrenciTel=event.target.value;
  }} />
  <input type="button" value="ekle" onClick={()=>{
    console.log({yeniOgrenciAd});
    console.log({yeniOgrenciSoyAd});
    console.log({yeniOgrenciTel});
var yeniOgrenciler=ogrenciler;
yeniOgrenciler.push({ad:yeniOgrenciAd,soyad:yeniOgrenciSoyAd,tel:yeniOgrenciTel});
this.setState(()=>{
  return{ogrenciler:yeniOgrenciler}
})
  }} />
</div>
<div id="ogrenciler" className="card-list">
  {
  
ogrenciler.map((ogrenci) => {
 
               return (
            <div className="card-container" key={ogrenci.ad}>
              <h3>{ogrenci.ad} {ogrenci.soyad}</h3>
             <h5>{ogrenci.tel}</h5>
             <input type="button" value={"sil"} onClick={
               ()=>{
                
                this.setState(()=>{
                 
                    return{
                      ogrenciler:ogrenciler.filter(function(ogr) { 
                      return ogr.ad !== ogrenci.ad
                  }) }
                })
               
               }
             }/>
            </div>
               );
           })
          }
</div>

      </div>

    );
  }
}

export default App;
