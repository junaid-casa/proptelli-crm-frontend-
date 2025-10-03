export const StatusBadge = ({ status }) => {
  const isActive = status.toLowerCase() === 'active';
  
  return (
    <span
      className={`inline-block px-6 py-1.5 rounded-full font-normal text-xss font-medium ${
        isActive
          ? 'bg-yellow text-white'
          : 'bg-brickred text-white'
      }`}
    >
      {status}
    </span>
  );
}