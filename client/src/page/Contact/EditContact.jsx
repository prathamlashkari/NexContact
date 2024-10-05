import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MyTheme } from "../../context/Theme.jsx";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../../store/api/UserApi.jsx";
import "./Contact.css";

const EditContact = () => {
  const { dark } = useContext(MyTheme);
  const { id } = useParams();
  const { data } = useGetContactByIdQuery(id);
  const [updateContact] = useUpdateContactMutation(id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  useEffect(() => {
    if (data) {
      setFormData({
        name: data?.name,
        email: data?.email,
        number: data?.phone,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateContact({ formData, id });
      console.log(res);
      toast.success(res);
    } catch (error) {
      console.error(error);
    }
    setFormData({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <div
      className={`add-contact-container ${dark ? "dark-theme" : "light-theme"}`}
    >
      <h2>Edit Contact</h2>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;
