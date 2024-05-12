//inheritance
class Animal{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    eat(){
     return `${this.name} is eating`
    }
    isSupercute(){
        return this.age<= 1;
    }
    iscute(){
        return true;
    }
}
//use of super keyword is to give parameter to super class constructor
class Dog extends Animal{
   constructor(name,age,speed){
    super(name,age);
    this.speed=speed;
}
 run(){
    return `${this.name} is running at ${this.speed}kmph`
 }
   }

const tommy = new Dog("tommy",3,5);
console.log(tommy.run());