import axios from "axios";
import type { AxiosResponse } from "axios";

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

interface Todo {
    userId: number
    id: number
    title: string
    complete: boolean
}

const fetchTodo = async () => {
    try {
        const response:AxiosResponse<Todo> = 
            await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        const todo = response.data;
        return todo;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log("axios error", error.response.status);
            }
        }
        else{
            console.log(error.message);
        }

        return null;
    }
}