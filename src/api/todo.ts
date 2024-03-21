interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const getTodos = async () => {
    return Promise.resolve([
        {
            id: 1,
            title: 'Learn React Query',
            completed: false,
        },
        {
            id: 1,
            title: 'Learn React Query',
            completed: false,
        }
    ])
}