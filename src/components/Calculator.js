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
        let l = currentValue.length
        let lastChar = currentValue.slice(l-1)
        if (currentValue=="0" ){
            this.display = "0"
            return this.display
        }
        if (!lastChar.includes("+") || !lastChar.includes("-") || !lastChar.includes("x") || !lastChar.includes("/")){
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
    totalEqual(currentValue){
        currentValue = currentValue.replaceAll("x","*",)
        let total = eval(currentValue)
        this.display = total
        return this.display
    }
   

    }


export default Calculator;