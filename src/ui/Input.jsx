function Input({ type, name, required, onChange }) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      className="w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
    />
  );
}

export default Input;
