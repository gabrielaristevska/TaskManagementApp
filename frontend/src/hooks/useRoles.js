import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const useRoles=() => {
    const [roles, setRoles]=useState([]);

    useEffect(() => {
        enumsRepository.getRoles()
            .then((response) => setRoles(response.data))
            .catch((error) => console.log(error));
    },[]);

    return roles;
};

export default useRoles;