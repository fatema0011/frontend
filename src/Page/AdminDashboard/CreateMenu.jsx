import React, { useState } from "react";
import style from "./CreateMenu.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateMenu = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", title);
    formData.append("number", price);
    formData.append("photo", photo);

    try {
      const response = await fetch("http://localhost:5000/admin/menu/add", {
        method: "POST",
        body: formData,
        credentials: "include"
      });

      if (response.ok) {
        toast.success('Menu item uploaded successfully!');
      } else {
        toast.error('Failed to upload menu item.');
      }
    } catch (error) {
      toast.error('Failed to upload menu item.');
    }
  };

  return (
    <div>
      <h1>Create Menu</h1>
      <div className={style.createMenu}>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={handleFileChange}
          />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Write Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input className={style.submit} type="submit" value="Upload" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateMenu;
