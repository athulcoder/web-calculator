const Operators = ({ label, func }) => {
  return (
    <button
      onClick={() => {
        func(label);
      }}
      className="bg-orange-500 py-6 px-10 rounded-full flex justify-center items-center text-3xl text-slate-100"
    >
      {label}
    </button>
  );
};

export default Operators;
