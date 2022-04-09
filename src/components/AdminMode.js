function AdminMode({ handleCancelAdmin }) {
  return (
    <div className="admin-mode">
      <h1>GOBLIN MODE</h1>
      <button onClick={handleCancelAdmin}>cancel</button>
    </div>
  );
}
export default AdminMode;
