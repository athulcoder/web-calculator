class Calculator{
    display;
    constructor(){
        this.display = "0"
    }
    appendNumbers(currentValue,value){
        if (currentValue[0]=="0"){
            currentValue = currentValue.slice(1)
        }
        let newVal = currentValue+ value;
        
        this.display = newVal

        return this.display;
    }

    appendOperator(currentValue,operator){
        if (currentValue=="0" ){
            this.display = "0"
            return this.display
        }
        if (currentValue.charAt(currentValue.length -1)!="+"){
            // alert(currentValue)
            this.display = currentValue + operator
            return this.display
        }
        if (currentValue.charAt(currentValue.length -1)!="-"){
            // alert(currentValue)
            this.display = currentValue + operator
            return this.display
        }
        else{
            this.display = currentValue;
        }
        return this.display

    }
    backSpace(currentValue){
        if (currentValue=="0" || currentValue.length==1){
            this.display = "0";
        }
        else{
            this.display = currentValue.slice(0,-1);
        }
        return this.display;
    }
    allClear(){
        this.display ="0";
        return this.display

    }
}

export default Calculator;