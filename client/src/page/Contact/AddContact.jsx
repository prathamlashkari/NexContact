import React, { useContext, useState } from "react";
import { MyTheme } from "../../context/Theme.jsx";
import "./Contact.css";
import { toast } from "react-toastify";

const AddContact = () => {
  const { dark } = useContext(MyTheme);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    description: "",
    profileImage: null,
    socialLink1: "",
    socialLink2: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    toast.success("Contact Saved");

    setFormData({
      name: "",
      email: "",
      number: "",
      description: "",
      profileImage: null,
      socialLink1: "",
      socialLink2: "",
      address: "",
    });
  };

  return (
    <div
      className={`add-contact-container ${dark ? "dark-theme" : "light-theme"}`}
    >
      <h2>Add Contact</h2>
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
        <div className="form-group">
          <label htmlFor="description">Contact Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter contact description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Choose profileImage</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleChange}
            accept="profileImage/*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="socialLink1">Social Link 1</label>
          <input
            type="url"
            id="socialLink1"
            name="socialLink1"
            value={formData.socialLink1}
            onChange={handleChange}
            placeholder="Enter social link 1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="socialLink2">Social Link 2</label>
          <input
            type="url"
            id="socialLink2"
            name="socialLink2"
            value={formData.socialLink2}
            onChange={handleChange}
            placeholder="Enter social link 2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Contact Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter contact address"
          />
        </div>
        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
