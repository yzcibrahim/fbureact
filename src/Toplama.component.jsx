import { Component } from "react";

class Toplama extends Component {

    constructor() {
        console.log("toplama componenti init");
        super();
        this.state = {
            sayi1: 0,
            sayi2: 0
        }
    }
    render() {
        console.log("t c render");
        const { sayi1, sayi2 } = this.state;
        const { yazi, islem } = this.props;
        let isaret="+";
        let toplam = 0;
        if (islem == "t") {
            toplam = parseInt(sayi1) + parseInt(sayi2);
            isaret="+";
        }
        else if (islem == "f") {
            toplam = parseInt(sayi1) - parseInt(sayi2);
            isaret="-";
        }
        else if (islem == "c") {
            toplam = parseInt(sayi1) * parseInt(sayi2);
            isaret="*";
        }
        else if (islem == "b") {
            if(sayi2==0)
            toplam="tanımsız";
            else
            toplam = parseInt(sayi1) / parseInt(sayi2);
            isaret="/";
        }
        return (
            <div>
                <div>{yazi}</div>
                <input type="text" value={sayi1} onChange={(event) => {
                    this.setState(() => {
                        return { sayi1: event.target.value }
                    });
                }} />{isaret}
                <input type="text" value={sayi2} onChange={(event) => {
                    this.setState(() => {
                        return { sayi2: event.target.value }
                    }, console.log(toplam));
                }} />=
                <span>{toplam}</span>
            </div>
        );
    }

}
export default Toplama