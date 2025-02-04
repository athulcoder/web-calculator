class Calculator{
    display;
    constructor(){
        this.display = "0"
    }
    appendValue(currentValue,value){
        if (currentValue[0]=="0"){
            currentValue = currentValue.slice(1)
        }
        let newVal = currentValue+ value;
        
        this.display = newVal

        return this.display;
    }
    allClear(){
        this.display ="0";
        return this.display

    }
}

export default Calculator;