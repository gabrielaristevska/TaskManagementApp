import { useEffect, useState } from "react";
import taskRepository from "../repository/taskRepository.js";

const useTaskDetails = (id) => {
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        taskRepository
            .details(id)
            .then((response) => {
                setTask(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return { task, loading };
};

export default useTaskDetails;