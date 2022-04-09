function EditModal({ item, setEditItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCloseModal = () => {
    setEditItem(false);
  }
  return (
    <section className="edit-modal">
      <form onSubmit={handleSubmit}>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
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
