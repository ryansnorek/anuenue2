import axios from "axios";
import { useEffect, useState } from "react";

function AdminMode({ handleCancelAdmin }) {
  const [storeItems, setStoreItems] = useState([]);
  const [pic, setPic] = useState("");
  const handleSelectFile = (e) => {
    setPic(e.target.files[0]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/store`)
      .then((items) => {
        setStoreItems(items.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="admin-mode">
      <section>
        <h1>GOBLIN MODE</h1>
        <button id="cancel" onClick={handleCancelAdmin}>
          cancel
        </button>
      </section>
      <section id="interface">
        {storeItems &&
          storeItems.map((item) => (
            <div className="store-item">
              <h3>{item.name}</h3>
              <div>
                <input type="file" onChange={handleSelectFile} />
                <button>upload</button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
export default AdminMode;
