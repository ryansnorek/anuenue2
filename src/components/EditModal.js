import { editItemByID } from "../helper";
import useForm from "../hooks/useForm";

function EditModal({ item, setEditItem }) {
  const initialValues = {
    name: item.name,
    description: item.description,
  };
  const [values, handleChange] = useForm(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const edited = await editItemByID(item.item_id, values);
    edited && setEditItem(false);
  };
  const handleCloseModal = () => {
    setEditItem(false);
  };

  return (
    <section className="edit-modal">
      <form onSubmit={handleSubmit}>
        <input name="name" value={values.name} onChange={handleChange} />
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
        />
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
