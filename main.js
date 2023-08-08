let val = document.getElementById('task_list_title');

console.log(val);

/* Changing Style */
// val.style.backgroundColor = '#ef4444';
val.style.color = 'black';
val.style.fontSize = '20px';
val.style.fontWeight = 'bold';
val.style.textAlign = 'center';
val.style.padding = '10px';
val.style.border = '1px solid #000000 #ddd';
val.style.borderRadius = '10px';
val.style.boxShadow = '0 0 1px #000000';

/* Chnaging Content */
val.textContent = 'Task Collection';

/** multiple element by query selector */
// document.querySelector('.task-item').style.backgroundColor = '#ef4444';
// console.log(multiple);

// let doc;
// doc = document;
// doc = document.head;
// doc = document.all.length;
// doc = document.forms[0].method;
// doc = Array.from(document.scripts;

// doc.forEach(element => {
//   console.log(element.getAttribute('src'));
// });

// console.log(doc);


let tasks = document.getElementsByClassName('task-item');

console.log(tasks);


let list = document.querySelectorAll('.task-item');
list.forEach((element, index) => {
  console.log(element.getElementsByClassName, element, index);
  // element.textContent = "hello, this is task no "+ index;
  element.textContent = `${index + 1}. Hello, I am a task.`; // object literal
  element.style.margin = '2px';
  element.style.backgroundColor = '#99f6e4';
  element.style.borderRadius = '6px';
  element.style.padding = '10px';
});
console.log(list);