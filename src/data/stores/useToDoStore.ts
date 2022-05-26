import create from "zustand";

import { generateId} from '../helpers';

interface Task {
    id:        string;
    title:     string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask : (title: string) => void;
    updateTask : (id: string, title: string) => void;
    removeTask : (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set,get) => {
    return ({
        tasks: [
            {
                id:'id11',
                title:'My default task ',
                createdAt: 1111111111,
            },
            {
                id:'id2',
                title:'My default task 222',
                createdAt: 2222222,
            },
        ],
        createTask: (title) => {
            const {tasks} = get();
            const newTask = {
                id: generateId(),
                title,
                createdAt: Date.now(),
            };

            set({
                tasks: [newTask].concat(tasks),
            });
             console.log(tasks, 11111);
        },
        updateTask: (id: string , title: string) => {
            const {tasks} = get();

            set({
                tasks : tasks.map((task : Task) => ({
                    ...task,
                    title: task.id === id ? title : task.title
                }))
            });
        },
        removeTask: (id: string) => {
            const {tasks} = get();

            set({
                tasks : tasks.filter((task) => ( task.id !== id ))
            });
        },
    });
})
