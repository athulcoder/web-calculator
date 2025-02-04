class Calculator{
    display;
    constructor(){
        this.display = "0"
    }
    appendValue(value){
        // if (this.display[0]=="0"){
        //     this.display = this.display.slice(1);
        // }
        let newVal = this.display + value;
        this.display = newVal

        return this.display;
    }
    allClear(){
        this.display ="0";
        return this.display

    }
}

export default Calculator;