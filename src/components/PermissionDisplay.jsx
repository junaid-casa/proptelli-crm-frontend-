const PermissionDisplay = ({ title, permissions }) => {
  return (
    <div className="bg-greywhite rounded-30 w-399 h-147 p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-md text-black">{title}</h3>
        <span className="px-4 py-1.5 rounded-full bg-white text-xss font-semibold border transition">
          ALL
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        {permissions.map((perm, index) => (
          <span
            key={index}
            className={`px-5 py-1.5 rounded-full text-xss font-semibold ${
              perm.active
                ? "bg-goldgreen text-white" // gold button look
                : "border border-gray-300 bg-white text-black"
            }`}
          >
            {perm.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PermissionDisplay