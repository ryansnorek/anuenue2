import axios from "axios";
import { useEffect, useState } from "react";

function AdminMode({ handleCancelAdmin }) {
  const [storeItems, setStoreItems] = useState([]);
  const [pic, setPic] = useState("");
  const [picID, setPicID] = useState("");

  const handleSelectFile = (e) => {
    setPic(e.target.files[0]);
  };
  const handleUpload = (id) => {
    console.log(id);
    setPicID(id);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/store`)
      .then((items) => {
        setStoreItems(items.data);
        console.log(items.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pic]);

  useEffect(() => {
    console.log(pic, picID, "effect");
    if (pic && picID) {
      const fd = new FormData();
      fd.append("image", pic);
      console.log("writing pic........");
      axios
        .post(`http://localhost:8000/store/single/${picID}`, fd, {
          onUploadProgress: (e) => console.log(e.loaded / e.total),
        })
        .then(() => {
          setPic("");
          setPicID("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pic, picID]);

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
              <div className="uploader">
                <img src={`http://localhost:8000/${item.pic}`} alt="pic" />
                <input type="file" onChange={handleSelectFile} />
                <button onClick={() => handleUpload(item.item_id)}>
                  upload
                </button>
              </div>
              <button id="edit">edit</button>
            </div>
          ))}
      </section>
    </div>
  );
}
export default AdminMode;
