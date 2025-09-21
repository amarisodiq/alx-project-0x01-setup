const Button: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  