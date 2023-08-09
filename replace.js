/** Create new Element */

const newTitle = document.createElement('h6');

newTitle.id = 'task-title';
newTitle.className = 'task-title';
newTitle.appendChild(document.createTextNode('Task Collection'));

/** get the previous title */

const oldTitle = document.querySelector('#task_list_title');

/*** Get the parent of the previous title */

const parentElement = oldTitle.parentNode;

/** Replace Element */
parentElement.replaceChild(newTitle, oldTitle);


/** Remove Element */
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

/**remove only the element */
listItems[0].remove();

/** remove from parent */
list.removeChild(listItems[3]);


/** add one more class name */
listItems[1].classList.add('bg-success');
listItems[1].classList.remove('bg-success');