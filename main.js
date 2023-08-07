let val = document.getElementById('task_list_title');

console.log(val);

/* Changing Style */
val.style.backgroundColor = '#ef4444';
val.style.color = '#fff';
val.style.fontSize = '20px';
val.style.fontWeight = 'bold';
val.style.textAlign = 'center';
val.style.padding = '10px';
val.style.border = '1px solid #000000 #ddd';
val.style.borderRadius = '10px';
val.style.boxShadow = '0 0 3px #000000';

/* Chnaging Content */
val.textContent = 'Task Collection';

/** multiple element by query selector */
document.querySelectorAll('.task-item').style.backgroundColor = '#ef4444';
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
