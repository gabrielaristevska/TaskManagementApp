import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const useCategories=() => {
    const [categories, setCategories]=useState([]);

    useEffect(() => {
        enumsRepository.getCategories()
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error));
    },[]);

    return categories;
};

export default useCategories;