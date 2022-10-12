class Person{
  constructor(name, sname)

  {
    this.name=name
    this.sname=sname
  }

  printobj(){
    console.log(this.name+ " " + this.sname)
  }
 }

let obj= new Person('RAM','KUMAR')
let obj1 = new Person('vivek', 'kumar')

obj1.printobj()
obj.printobj()

