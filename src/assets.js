import Project from './classes/project';
import Task from './classes/task';
import todo from './classes/todo';

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function saveData() {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('projects', JSON.stringify(todo.projectList));
  }
}

export function loadData() {
  if (!localStorage.getItem('projects')) return;

  const data = JSON.parse(localStorage.getItem('projects'));

  // load projects
  data
    .filter((_, index) => index > 2)
    .forEach((project) => {
      todo.addProject(new Project(project.name));
    });

  // load tasks
  data.forEach((project, index) => {
    project.taskList.forEach((task) => {
      todo.getProject(index).addTask(new Task(task.title, task.dueDate));
    });
  });
}

// showOrHideForm = (form, button, field, e) => {
//   const target = e.target;

//   if (target.tagName !== 'BUTTON') return;

//   if (target.dataset.action) {
//     form.classList.toggle('hidden');
//     button.classList.toggle('hidden');
//     field.value = '';
//   }
// };

// setInputToContentSize = () => {
//   document.querySelectorAll('.project-list input').forEach((input) => {
//     input.style.width = input.value.length + 'ch';
//   });
// };

export default { saveData, loadData };
