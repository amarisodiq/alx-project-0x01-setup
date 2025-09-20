import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(), // generate unique ID
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string[]
  ) => {
    setFormData((prev) => {
      let updated: any = { ...prev };
      let target: any = updated;

      for (let i = 0; i < path.length - 1; i++) {
        target = target[path[i]];
      }
      target[path[path.length - 1]] = e.target.value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Add New User
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 max-h-[70vh] overflow-y-auto">
          {/* Basic Fields */}
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange(e, ["name"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange(e, ["username"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange(e, ["email"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange(e, ["phone"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => handleChange(e, ["website"])}
            className="w-full p-2 border rounded"
          />

          {/* Address */}
          <h3 className="font-semibold mt-4">Address</h3>
          <input
            type="text"
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) => handleChange(e, ["address", "street"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Suite"
            value={formData.address.suite}
            onChange={(e) => handleChange(e, ["address", "suite"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={formData.address.city}
            onChange={(e) => handleChange(e, ["address", "city"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={formData.address.zipcode}
            onChange={(e) => handleChange(e, ["address", "zipcode"])}
            className="w-full p-2 border rounded"
          />

          {/* Company */}
          <h3 className="font-semibold mt-4">Company</h3>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={(e) => handleChange(e, ["company", "name"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Catch Phrase"
            value={formData.company.catchPhrase}
            onChange={(e) => handleChange(e, ["company", "catchPhrase"])}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="BS"
            value={formData.company.bs}
            onChange={(e) => handleChange(e, ["company", "bs"])}
            className="w-full p-2 border rounded"
          />

          {/* Actions */}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
