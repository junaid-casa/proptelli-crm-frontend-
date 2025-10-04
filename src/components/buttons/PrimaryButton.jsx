import { Plus } from "lucide-react";

const PrimaryButton = ({ 
  label = "Create Role", 
  onClick, 
  src, 
  bgcolor = "goldgreen", 
  iconwidth = 16, 
  iconheight = 16 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-50 w-188 gap-2 px-33 py-14 bg-${bgcolor} text-white rounded-full hover:bg-goldgreen transition-colors`}
    >
      {src && <img width={iconwidth} height={iconheight} src={src} alt="icon" />}
      <span className="text-md font-medium">{label}</span>
    </button>
  );
};

export default PrimaryButton;
