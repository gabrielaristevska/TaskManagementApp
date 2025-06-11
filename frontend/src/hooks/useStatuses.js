import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const useStatuses=() => {
    const [statuses, setStatuses]=useState([]);

    useEffect(() => {
        enumsRepository.getStatuses()
            .then((response) => setStatuses(response.data))
            .catch((error) => console.log(error));
    },[]);

    return statuses;
};

export default useStatuses;