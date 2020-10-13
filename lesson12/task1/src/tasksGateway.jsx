const sourceUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/tasks';

export const createTask = taskData => {
  fetch(sourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;utc-8'
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (response.ok) {
      throw new Error('Failed to create task');
    }
  })
};

export const fetchTasksList = () => {
  return fetch(sourceUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
    .then(tasksList => tasksList
      .map(({ id, ...task }) => ({ ...task, id: id })));
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${sourceUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to toggle task");
    }
  });
};

export const deleteTask = (id) => {
  return fetch(`${sourceUrl}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
    })
}
