import useForm from "../hooks/useForm";

function EditModal({ item, setEditItem }) {

  const initialValues = {
    name: item.name,
    description: item.description,
  };
  const [values, handleChange] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCloseModal = () => {
    setEditItem(false);
  };
  return (
    <section className="edit-modal">
      <form onSubmit={handleSubmit}>
        <input value={values.name} onChange={handleChange} />
        <textarea value={values.description} onChange={handleChange} />
        <button>Update</button>
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
