function Student (first,last,age,cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.class=cls;

}
 
let Student1=new Student("himanshu","namdev",23,5);
let Student2=new Student("himanshu","namdev",23,5);
let Student3=new Student("himanshu","namdev",23,5);
let Student4=new Student("himanshu","namdev",23,5);

console.log(Student1,Student2);