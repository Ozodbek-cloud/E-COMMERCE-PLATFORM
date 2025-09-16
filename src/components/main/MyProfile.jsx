import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:6447/user/${id}`);
        const userData = res.data;
        setUser(userData);
        setFirstName(userData.firstName || "");
        setLastName(userData.lastName || "");
        setEmail(userData.email || "");
        setPassword(userData.password || "");
        setAvatarPreview(
          userData.avatar
            ? `http://localhost:6447/uploads/avatar/${userData.avatar}`
            : ""
        );
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    fetchUser();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      if (avatar) {
        formData.append("avatar", avatar);
      }

      const { data } = await axios.put(
        `http://localhost:6447/user/${id}/update`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(data);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Xatolik yuz berdi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-[#0061DF] mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <label htmlFor="avatar" className="cursor-pointer">
              <img
                src={avatarPreview || "default-avatar.png"}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#0061DF] shadow-md mb-4"
              />
            </label>
            <input
              type="file"
              id="avatar"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0061DF] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0061DF] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0061DF] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0061DF] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#0061DF] text-white font-semibold rounded-lg shadow-md hover:bg-[#004bbf] transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
