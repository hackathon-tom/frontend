const Modal = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center justify-center w-64 h-64 rounded-xl bg-white text-black shadow-xl">
      {children}
    </div>
  );
};

export default Modal;
