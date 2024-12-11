function Button({ children, handleClick }) {
    return (
      <button
        className="px-3 py-2 bg-blue-300 border rounded-lg"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
  
  export default Button;