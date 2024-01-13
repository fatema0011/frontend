import React, { useState, useEffect } from "react";
import style from "./Menus.module.css";
import Button from "../../Components/Button/Button";
import UpdateButtonModal from "../../Components/UpdateMenuModal/Button";
import DeleteMenu from "../../Components/DeleteMenu/DeleteMenu";
const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/menu/all", { credentials: "include" });
  
      if (response.ok) {
        const data = await response.json();
        setMenus(data); // Update state with fetched menu items
      } else {
        throw new Error('Failed to fetch menus');
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };
  
  useEffect(() => {
    fetchMenus();
  }, []);

  const handleUpdateClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
    setShowModal(false);
  };
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("photo", photo); // Assuming photo is the file object
      formData.append("title", title);
      formData.append("price", price);

      const response = await fetch(
        `http://localhost:5000/admin/update/${selectedMenu._id}`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );

      if (response.ok) {
        // Handle success (e.g., close modal, update UI, etc.)
        handleCloseModal();
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("Update failed:", errorData.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  //Delete Menu
  const handleDelete = async (menuId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/menu/${menuId}`,
        {
          method: "DELETE",
          credentials: "include"
        }
       
      );

      if (response.ok) {
        // Handle success (e.g., update UI by fetching menus again)
        const updatedMenus = menus.filter((menu) => menu._id !== menuId);
        setMenus(updatedMenus);
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("Delete failed:", errorData.message);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
  return (
    <>
      {" "}
      <div className={style.menuContainer}>
        {menus.map((menu, index) => (
          <div key={index} className={style.item}>
            <img
              src={`http://localhost:5000/${menu.photo}`}
              width="200px"
              height="200px"
              alt="Menu"
            />
            <p className={style.title}>{menu.title}</p>
            <p className={style.price}>{menu.price}$</p>
            {/* <div className={style.rating}>({menu.rating})</div> */}
            <div className={style.button}>
              <UpdateButtonModal
                text={"Update"}
                menu={menu}
                handleClick={handleUpdateClick}
              />
              <DeleteMenu
                text={"Delete"}
                menu={menu}
                handleClick={handleDelete}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal for updating menu item */}
      {showModal && selectedMenu && (
        <div className={style.modalBackground}>
          <div className={style.modal}>
            <form onSubmit={handleUpdateSubmit}>
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
              {/* Add your update form elements here */}
              <div className={style.modalButtons}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    margin: "5px",
                    padding: "5px",
                  }}
                >
                  Submit
                </button>
                <button
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    margin: "5px",
                    padding: "5px",
                  }}
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
