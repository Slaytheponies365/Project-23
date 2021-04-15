class Test{
    constructor(a){
    this.a = a
    }
    
    checkEven(){
    if(this.a %2 == 0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
    }
    checkPositive(){
    if(this.a > 0){
    console.log("positive")
    }
    else{
     console.log("negative")
    }
    }
}