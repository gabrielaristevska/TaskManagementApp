import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const usePriorities=() => {
    const [priorities, setPriorities]=useState([]);

    useEffect(() => {
        enumsRepository.getPriorities()
            .then((response) => setPriorities(response.data))
            .catch((error) => console.log(error));
    },[]);

    return priorities;
};

export default usePriorities;