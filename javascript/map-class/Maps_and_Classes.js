 
var map_name = new Map(); 
map_name.set("first name", "Dhaneshan"); 
map_name.set("last name", "S"); 
map_name.set("friend 1","Bran") 
    .set("friend 2","Arya"); 
console.log(map_name); 

console.log("map1 has friend 3 ? " + map_name.has("friend 3")); 
console.log("get value for key = friend 3 - "+ map_name.get("friend 3")); 
console.log("delete element with key = friend 2 - " + map_name.delete("friend 2")); 
map_name.clear(); 
console.log(map_name);
class Employee
{
    constructor(id,name)
    {
      this.id=id;
      this.name=name;
    }
    detail()
    {
  document.writeln(this.id+" "+this.name+"<br>")
    }
  }
//passing object to a variable 
var e1=new Employee(101,"S DHaneshan");
var e2=new Employee(102,"William");
e1.detail(); 
e2.detail();
