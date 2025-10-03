import { Plus } from "lucide-react";

const PrimaryButton = ({ label = "Create Role", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center h-50 w-188 gap-2 px-33 py-14 bg-black text-white rounded-full hover:bg-goldgreen transition-colors"
    >
      <Plus size={16} strokeWidth={2} />
      <span className="text-md font-medium">{label}</span>
    </button>
  );
};

export default PrimaryButton;
