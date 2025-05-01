
# 📝 Task Manager App

Welcome to the **Task Manager**!  
A simple, robust RESTful API for managing your daily tasks.  
Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Status tracking: `Pending` or `Completed`
- Timestamps for each task

---

## 📦 Project Structure

```
TaskManager/
├── controller/
│   └── task.controller.js
├── model/
│   └── task.model.js
├── routes/
│   └── task.route.js
├── utils/
│   └── asyncHandler.util.js
├── apiTesting.txt
├── README.md
└── ... (other config and entry files)
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/TaskManager.git
cd TaskManager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

### 4. Start the server

```bash
npm start
```

Server will run at: [http://localhost:3001](http://localhost:3001)

---

## 📚 API Endpoints

### 1. Get All Tasks

- **Method:** `GET`
- **URL:** `/task/getTask`

**Example:**
```bash
curl -X GET http://localhost:3001/task/getTask
```

---

### 2. Create a New Task

- **Method:** `POST`
- **URL:** `/task/addTask`
- **Body:**  
  ```json
  {
    "taskName": "Buy groceries"
  }
  ```

**Example:**
```bash
curl -X POST http://localhost:3001/task/addTask \
  -H "Content-Type: application/json" \
  -d '{"taskName":"Buy groceries"}'
```

---

### 3. Update a Task

- **Method:** `PUT`
- **URL:** `/task/updateTask/:id`
- **Body:**  
  ```json
  {
    "taskName": "Buy groceries and cook dinner",
    "status": "Completed"
  }
  ```

**Example:**
```bash
curl -X PUT http://localhost:3001/task/updateTask/<TASK_ID> \
  -H "Content-Type: application/json" \
  -d '{"taskName":"Buy groceries and cook dinner","status":"Completed"}'
```

---

### 4. Delete a Task

- **Method:** `DELETE`
- **URL:** `/task/deleteTask/:id`

**Example:**
```bash
curl -X DELETE http://localhost:3001/task/deleteTask/<TASK_ID>
```

---

## 🗂️ Task Model

Each task has the following structure:

```json
{
  "id": "string",
  "taskName": "string",
  "status": "Pending | Completed",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

---

## 🛠️ Contributing

1. Fork the repo 🍴
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request 🚀

---

## ❓ FAQ

- **Q:** Can I edit a task's status?  
  **A:** Yes! Use the update endpoint and set `"status": "Completed"` or `"Pending"`.

- **Q:** What happens if I try to create a task without a name?  
  **A:** The API will return a 400 error: "Task name cannot be empty".

---

## 📬 Contact

For questions or suggestions, open an issue or reach out via [GitHub Issues](https://github.com/mrimaginatory/TaskManager/issues).

---

## ⭐️ Show your support

If you like this project, give it a ⭐️ on GitHub!

---

Happy Task Managing! 🎉
