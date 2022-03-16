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
        const {yazi}=this.props;
        return(
<div>{yazi}</div>
        );
    }

}
export default Toplama