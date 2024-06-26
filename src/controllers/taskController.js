import { format } from 'date-fns';
import Task from '../classes/task';
import { saveData } from '../assets';

class TaskController {
  #activeProject = undefined;
  #projectName = document.querySelector('.content h2');
  #taskList = document.querySelector('.task-list');
  #form = document.querySelector('.content form');

  constructor(project) {
    this.#activeProject = project;

    this.updateProjectName(this.#activeProject);
    this.updateProjectTaskList(this.#activeProject);
    this.#form.addEventListener('submit', this.addTaskToProject);

    this.#taskList.addEventListener('click', (e) => {
      this.deleteTaskFromList(e);
      this.changeTask(e);
    });
  }

  updateActiveProject = (project) => {
    this.#activeProject = project;
    this.updateProjectName(this.#activeProject);
    this.updateProjectTaskList(this.#activeProject);
  };

  updateProjectName = (project) => {
    if (!project) {
      this.#projectName.textContent = '';
      return;
    }

    this.#projectName.textContent = '';
    this.#projectName.textContent = project.name;
  };

  updateProjectTaskList = (project) => {
    if (!project) {
      this.#taskList.innerHTML = '';
      return;
    }

    let markup = '';

    project.taskList.forEach((task, index) => {
      markup += `
        <li>
          <button data-index=${index}>
            <input
              type="text"
              name="${task.title}"
              id="${index}"
              value="${task.title}"
              readonly
            />

            <input type="date" value="${task.dueDate}" readonly>

            <i class="las la-trash"></i>
          </button>
        </li>`;
    });

    this.#taskList.innerHTML = markup;
  };

  addTaskToProject = (e) => {
    e.preventDefault();

    this.#activeProject.addTask(
      new Task(e.target.elements[0].value, format(Date.now(), 'yyyy-MM-dd'))
    );

    this.updateProjectTaskList(this.#activeProject);

    e.target.elements[0].value = '';
    saveData();
  };

  deleteTaskFromList = (e) => {
    if (e.target.tagName !== 'I') return;

    if (!e.target.classList.contains('la-trash')) return;

    this.#activeProject.deleteTask(
      Number(e.target.parentElement.dataset.index)
    );

    this.updateProjectTaskList(this.#activeProject);
    saveData();
  };

  changeTask = (e) => {
    if (e.target.tagName !== 'INPUT') return;

    const input = e.target;
    input.removeAttribute('readonly');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (input.type === 'text') {
          this.#activeProject.updateTask(
            Number(input.id),
            'title',
            input.value
          );
        }

        if (input.type === 'date') {
          this.#activeProject.updateTask(
            Number(input.id),
            'dueDate',
            input.value
          );
        }

        input.setAttribute('readonly', 'readonly');
        saveData();
      }
    });
  };
}

export default TaskController;
