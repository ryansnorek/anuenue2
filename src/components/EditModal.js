import axios from "axios";
import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

function EditModal({ item, setEditItem }) {
  const initialValues = {
    name: item.name,
    description: item.description,
  };
  const [values, handleChange] = useForm(initialValues);
  const [updateItem, setUpdateItem] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateItem(true);
    setEditItem(false);
  };
  const handleCloseModal = () => {
    setEditItem(false);
  };

  useEffect(() => {
      console.log("updating ???")
      console.log(updateItem)
    if (updateItem) {
      axios
        .put(`http://localhost:8000/store/${item.item_id}`, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [updateItem, item.item_id, values]);

  return (
    <section className="edit-modal">
      <form onSubmit={handleSubmit}>
        <input name="name" value={values.name} onChange={handleChange} />
        <textarea name="description" value={values.description} onChange={handleChange} />
        <button type="submit">Update</button>
        <img
          className="icon"
          onClick={handleCloseModal}
          src="../../images/icons/close.png"
          alt="close"
        />
      </form>
    </section>
  );
}
export default EditModal;
