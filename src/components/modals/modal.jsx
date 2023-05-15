
const Modal = ({closeModal, children}) => {



  return (
    <div onClick={()=>{closeModal(false)}} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs flex justify-end z-[20]" >
      <div className="bg-white w-[30%] h-[100%]  pt-[2.5rem] px-[1.25rem]" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
