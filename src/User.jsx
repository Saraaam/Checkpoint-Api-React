import React from "react";

export default function User({ name, username, email, phone, website }) {
  return (
    <div className="group relative block rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transform transition-transform">
      <img
        alt={name}
        src={`https://gomycode.com/ma/wp-content/uploads/sites/27/2024/07/Rectangle-4748-1.png`}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-40"
      />

      <div className="relative p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
          @{username}
        </p>
        <h2 className="text-xl font-bold text-white sm:text-2xl">{name}</h2>
        <p className="text-sm text-gray-300 mt-2">📧 {email}</p>
        <p className="text-sm text-gray-300 mt-1">📞 {phone}</p>
        <p className="text-sm text-gray-300 mt-1">🌐 {website}</p>

        <div className="mt-8">
          <div className="translate-y-6 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-gray-200">
              This is an amazing developer who loves to solve problems and build
              creative digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
