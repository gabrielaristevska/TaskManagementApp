import { useCallback, useEffect, useState } from "react";
import taskRepository from "../repository/taskRepository.js";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useState({
        page: 0,
        size: 5,
        sortBy: "id",
        sortDir: "asc",
        status: null,
    });
    const [totalElements, setTotalElements] = useState(0);

    const fetchTasks = useCallback(() => {
        setLoading(true);
        taskRepository.findAll(params)
            .then((response) => {
                setTasks(response.data.content);
                setTotalElements(response.data.totalElements);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [params]);

    const updateParams = useCallback((newParams) => {
        setParams((prev) => ({
            ...prev,
            ...newParams,
        }));
    }, []);

    const onAdd = useCallback((data) => {
        taskRepository.create(data)
            .then(fetchTasks)
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onEdit = useCallback((id, data) => {
        taskRepository.update(id, data)
            .then(fetchTasks)
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onDelete = useCallback((id) => {
        taskRepository.deleteById(id)
            .then(fetchTasks)
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onStart = useCallback((id) => {
        taskRepository.start(id)
            .then(fetchTasks)
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onFinish = useCallback((id) => {
        taskRepository.finish(id)
            .then(fetchTasks)
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {
        tasks,
        loading,
        onAdd,
        onEdit,
        onDelete,
        onStart,
        onFinish,
        updateParams,
        params,
        totalElements,
    };
};

export default useTasks;