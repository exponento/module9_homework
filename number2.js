const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   const parse = JSON.parse(jsonString);
   const list = parse.list;
const resaltP = {
    name: list[0].name,
    age: list[0].age,
    prof: list[0].prof,
};
const resaltV = {
    name: list[1].name,
    age: list[1].age,
    prof: list[1].prof,
}
const resalt = [resaltP, resaltV]
console.log('list:',resalt)
