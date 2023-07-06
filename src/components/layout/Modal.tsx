"use client";

import { ReactNode, useRef } from "react";

export default function Modal({ openButtonClasses, openButtonText, content } : { openButtonClasses: string, openButtonText: string | ReactNode, content: ReactNode }) {
  const modal: any = useRef();
  return (
    <>
      <button 
        className={"btn " + openButtonClasses}
        onClick={() => modal.current.showModal()}
      >
        {openButtonText}
      </button>
      <dialog
        ref={modal}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-base-300">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modal.current.close()}>
            ✕
          </button>
          {content}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
