import Project from '../classes/project';
import TaskController from './taskController';
import { saveData } from '../assets';

class ProjectController {
  #todo = undefined;
  #taskController = undefined;
  #form = document.querySelector('aside form');
  #activeProject = document.querySelector('.active');
  #defaultList = document.querySelector('.default-projects');
  #dynamicList = document.querySelector('.dynamic-projects');

  constructor(todo) {
    this.#todo = todo;
    this.#taskController = new TaskController(this.#todo.activeProject);

    this.updateProjectList(this.#todo.projectList);

    this.#form.addEventListener('submit', this.addProjectToList);
    this.#defaultList.addEventListener('click', this.updateActiveProject);
    this.#dynamicList.addEventListener('click', (e) => {
      this.updateActiveProject(e);
      this.deleteProjectFromList(e);
      this.changeProjectName(e);
    });
  }

  updateActiveProject = (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    this.#todo.activeProject = Number(e.target.dataset.index);

    this.#taskController.updateActiveProject(this.#todo.activeProject);

    this.#activeProject.classList.remove('active');
    this.#activeProject = e.target;
    this.#activeProject.classList.add('active');
  };

  addProjectToList = (e) => {
    e.preventDefault();

    this.#todo.addProject(new Project(e.target.elements[0].value));

    this.updateProjectList(this.#todo.projectList);

    e.target.elements[0].value = '';
    saveData();
  };

  updateProjectList = (list) => {
    let markup = '';

    list
      .filter((_, index) => index > 2)
      .forEach((project, index) => {
        markup += `
        <li>
          <button data-index=${index + 3}>
            <i class="las la-tasks"></i>

            <input
              type="text"
              name="${project.name}"
              id="${index + 3}"
              value="${project.name}"
              readonly
            />

            <i class="las la-trash"></i>
          </button>
        </li>`;
      });

    this.#dynamicList.innerHTML = markup;
  };

  deleteProjectFromList = (e) => {
    if (e.target.tagName !== 'I') return;

    if (!e.target.classList.contains('la-trash')) return;

    this.#todo.deleteProject(Number(e.target.parentElement.dataset.index));

    if (e.target.parentElement.classList.contains('active')) {
      this.#taskController.updateActiveProject(undefined);
    }

    this.updateProjectList(this.#todo.projectList);
    saveData();
  };

  changeProjectName = (e) => {
    if (e.target.tagName !== 'INPUT') return;

    const input = e.target;
    input.removeAttribute('readonly');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.#todo.updateProject(Number(input.id), 'name', input.value);

        if (input.parentElement.classList.contains('active')) {
          this.#taskController.updateActiveProject(this.#todo.activeProject);
        }

        input.setAttribute('readonly', 'readonly');
        saveData();
      }
    });
  };
}

export default ProjectController;
