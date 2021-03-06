import axios from "axios";
import { useEffect, useState } from "react";
import { getStoreItems, uploadImage } from "../helper";
import EditModal from "./EditModal";

function AdminMode({ handleCancelAdmin }) {
  const [storeItems, setStoreItems] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [pic, setPic] = useState("");
  const [picID, setPicID] = useState("");

  const handleSelectFile = (e) => {
    setPic(e.target.files[0]);
  };
  const handleUpload = (id) => {
    setPicID(id);
  };
  const handleClickEdit = (item) => {
    setEditItem(item);
  };

  useEffect(() => {
    const getItems = async () => {
      const { items } = await getStoreItems();
      console.log(items)
      items && setStoreItems(items);
    };
    getItems();
  }, [pic, editItem]);

  useEffect(() => {
    const uploadNewImage = async () => {
      const fd = new FormData();
      fd.append("image", pic);
      try {
        await uploadImage(picID, fd);
      } catch (err) {
        console.log(err)
      }
      setPic("");
      setPicID("");
    };
    if (pic && picID) {
      uploadNewImage();
    }
  }, [pic, picID]);

  const handleDelete = () => {
    axios.delete("https://anuenue-backend-v2.herokuapp.com/admin/items/1")
    .then((res) => console.log(res)
    .catch(err => console.log(err)))
  }
  return (
    <div className="admin-mode">
      <section className="top">
        <div className="title">GOBLIN MODE</div>
        <button onClick={handleDelete}>delete</button>
        <button id="abort" onClick={handleCancelAdmin}>
          abort
        </button>
      </section>
      {editItem && <EditModal item={editItem} setEditItem={setEditItem} />}
      <section id="interface">
        {storeItems.length > 1 &&
          storeItems.map((item) => (
            <div className="store-item" key={item.item_id}>
              <h3>{item.name}</h3>
              <div className="uploader">
                <img src="../images/sas.jpeg" alt="pic" />
                <input type="file" onChange={handleSelectFile} />
                <button onClick={() => handleUpload(item.item_id)}>
                  upload pic
                </button>
              </div>
              <button id="edit" onClick={() => handleClickEdit(item)}>
                edit
              </button>
            </div>
          ))}
      </section>
    </div>
  );
}
export default AdminMode;
