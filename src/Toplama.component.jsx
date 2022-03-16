import { Component } from "react";

class Toplama extends Component
{
    
    constructor()
    {
        super();
        this.state = {
            sayi1:0,
            sayi2:0
          }
    }
    render(){
        const{sayi1,sayi2}=this.state;
        const {yazi}=this.props;
        const toplam=parseInt(sayi1)+parseInt(sayi2);
        return(
<div>
    <div>{yazi}</div>
    <input type="text" value={sayi1} onChange={(event)=>{
            this.setState(()=>{
                return {sayi1:event.target.value}
            });
    }}/>+
    <input type="text" value={sayi2} onChange={(event)=>{
            this.setState(()=>{
                return {sayi2:event.target.value}
            },console.log(toplam));
    }}/>=
    <span>{toplam}</span>
    </div>
        );
    }

}
export default Toplama