class Person {
        
    name
    year=1

    constructor(name,year){
        this.name = name
       // this.year = year
    }   

    introduceSelf(){
        console.log(`Hello my name is ${this.name} and on the ${this.year} year`)
    }   

}

const ali = new Person('Ali')
ali.introduceSelf()

