const parser = new DOMParser();
const XMLString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;
const parsXml = parser.parseFromString(XMLString, "text/xml");
const list = parsXml.querySelector('list');
const studentEn = list.firstElementChild;
const nameEn = studentEn.querySelector('name');
const firstEn = nameEn.querySelector('first');
const secondEn = nameEn.querySelector('second');
const ageEn = studentEn.querySelector('age');
const profEn = studentEn.querySelector('prof');
const langEn = nameEn.getAttribute('lang');

const studentRu = list.lastElementChild;
const nameRu = studentRu.querySelector('name');
const firstRu = nameRu.querySelector('first');
const secondRu = nameRu.querySelector('second');
const ageRu = studentRu.querySelector('age');
const profRu = studentRu.querySelector('prof');
const langRu = nameRu.getAttribute('lang');


const resaltEn = {
  name: firstEn.textContent + secondEn.textContent,
  age: Number(ageEn.textContent),
  prof: profEn.textContent,
  lang: langEn,
}

const resaltRu = {
  name: firstRu.textContent + secondRu.textContent,
  age: Number(ageRu.textContent),
  prof: profRu.textContent,
  lang: langRu,
}
const resalt = [resaltEn, resaltRu]
console.log('learn', resalt)

