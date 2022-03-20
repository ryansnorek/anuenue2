// import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

export default function useForm(initialValues) {
    // const [values, setValues] = useLocalStorage(key, initialValues);
    const [values, setValues] = useState(initialValues);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
    const clearForm = (e) => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return [values, handleChange, clearForm];
  }