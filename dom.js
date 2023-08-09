/** Create New Element */
const listElement = document.createElement('li');

/** Add Class name */
listElement.className = "list-group-item d-flex justify-content-between align-items-center";

/** Add Id */
listElement.id = "new-list-element";

/** Add Attribute */
listElement.setAttribute('title', 'New List Element');
/** Create Text node and append */
listElement.appendChild(document.createTextNode('New List Element'));
document.querySelector('ul.list-group').appendChild(listElement);




/** Create new <a> element */
const link = document.createElement('a');
link.className = "btn btn-sm btn-danger delete-btn";
link.href = "#";
link.setAttribute('title', 'Delete');
link.appendChild(document.createTextNode('X'));
listElement.appendChild(link);
// const last = document.querySelector('ul').lastElementChild.appendChild(link);

