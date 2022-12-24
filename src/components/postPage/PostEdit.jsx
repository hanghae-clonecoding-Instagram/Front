import { useState } from 'react';
import ReactModal from 'react-modal';


const PostEdit = ()=>{
  const rootElement = document.getElementById('rootModal');
  // ReactModal.setAppElement('#rootModal');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
      <>
      <div id='rootModal'>
        <ReactModal isOpen={modalIsOpen}>
          <div>모달 입니다.</div>
        </ReactModal>
      </div>
      </>
  )
}
export default PostEdit;
