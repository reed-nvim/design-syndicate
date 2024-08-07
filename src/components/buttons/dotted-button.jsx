const DottedButton = ({ children }) => {
  return (
    <button style={{ fontWeight: 500, fontSize: 14 }} className="rounded border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-1xl active:shadow-none">
      {children}
    </button>
  );
};

export default DottedButton;
