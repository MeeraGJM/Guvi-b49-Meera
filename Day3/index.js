let obj1={name: "Person 1", age:5};
let obj2={age:5, name: "Person 1"};

//compare properties
if(Object.keys(obj1).length == Object.keys(obj2).length)
{
    console.log(" JSON have same properities ");
}
else{
  console.log(" JSON have not same properties ");
}

//compare the properties of value
for(let keys in obj1)
{
  if(obj2.hasOwnProperty(keys) || obj1[keys]==obj2[keys])
  {
    console.log("JSON have same properties of value");
  }
  else
  {
    console.log("JSON have not same properties of value");
}
}