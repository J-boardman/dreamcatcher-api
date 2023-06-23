"use client";

import { ReactNode, useRef } from "react";

export default function Modal({ openButtonClasses, openButtonText, content } : { openButtonClasses: string, openButtonText: string, content: ReactNode }) {
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
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          {content}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
