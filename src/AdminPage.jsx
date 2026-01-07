import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5050/contact", {
          headers: { Authorization: token },
        });
        setContacts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1f] pt-32 pb-16 px-4 md:px-10">
      {/* Page Title */}
      <h1
        className="text-center text-4xl md:text-6xl font-extrabold mb-12
        bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]
        text-transparent bg-clip-text drop-shadow-lg"
      >
        Admin Dashboard
      </h1>

      {/* Container */}
      <div
        className="max-w-[1400px] mx-auto backdrop-blur-xl bg-white/10
        border border-white/20 rounded-3xl shadow-[0_0_35px_#2563EB]
        p-4 md:p-8"
      >
        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-2xl">
          <table className="min-w-full text-sm md:text-base text-white">
            {/* Sticky Header */}
            <thead className="sticky top-0 z-10">
              <tr className="bg-linear-to-r from-[#1E3A8A] to-[#2563EB]">
                {[
                  "ID",
                  "Name",
                  "Email",
                  "Phone",
                  "Company",
                  "Country",
                  "Title",
                  "Details",
                  "Submitted At",
                ].map((head, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 font-semibold text-left whitespace-nowrap border-b border-white/20"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {contacts.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-white/10 hover:bg-white/10 transition duration-300"
                >
                  <td className="px-4 py-3 font-medium">{c.id}</td>
                  <td className="px-4 py-3">{c.name}</td>
                  <td className="px-4 py-3 text-blue-300">{c.email}</td>
                  <td className="px-4 py-3">{c.phone}</td>
                  <td className="px-4 py-3">{c.company}</td>
                  <td className="px-4 py-3">{c.country}</td>
                  <td className="px-4 py-3">{c.title}</td>

                  {/* Details with tooltip-style reveal */}
                  <td className="px-4 py-3 max-w-[260px]">
                    <div className="truncate text-gray-300">
                      {c.details}
                    </div>
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-gray-300">
                    {new Date(c.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {contacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">
              No customer inquiries available yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
