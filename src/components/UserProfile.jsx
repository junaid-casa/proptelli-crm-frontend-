const UserProfile = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        alt="Profile"
        className="w-10 h-10 rounded-full w-[50px] h-[50px] flex justify-center object-cover border-4 border-gray-200 hover:border-yellow-500 transition-colors"
      />
    </button>
  );
};
export default UserProfile;
