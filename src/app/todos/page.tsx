"use client";

import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todo";

const Todos = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => await getTodos(),
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;

    return (
        <>
            <h1>Todos</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    )
};

export default Todos