import { Plus } from "lucide-react";

const PrimaryButton = ({ label = "Create Role", onClick,src,bgcolor,iconwidth,iconheight}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center h-50 w-188 gap-2 px-33 py-14 bg-${bgcolor} text-white rounded-full hover:bg-goldgreen transition-colors`}
    >
      <img width={iconwidth} height={iconheight} src={src}/>
      <span className="text-md font-medium">{label}</span>
    </button>
  );
};

export default PrimaryButton;
