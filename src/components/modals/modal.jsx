
const Modal = ({closeModal, children}) => {



  return (
    <div onClick={()=>{closeModal(false)}} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs flex justify-end" >
      <div className="bg-white w-[25.625rem] pt-[2.5rem] px-[1.25rem]" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
