{
    const tasks = [
        {
            content: "przykład 1",
        }
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const taskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const doneButtons = document.querySelectorAll(".js-done");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                taskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li 
              ${task.done ? " style=\"text-decoration: line-through\"" : ""}
              >
              <button class="js-done section__button--done">✔</button>
              <button class="js-remove section__button--remove">❌</button>
              ${task.content}
              </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
