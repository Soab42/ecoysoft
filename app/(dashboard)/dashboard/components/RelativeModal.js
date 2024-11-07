import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RelativeModal({ setShowForm, title, children }) {
  return (
    <div
      className="modal-content absolute top-0 right-0 left-0 z-50 w-full bg-black/20 h-full p-4 backdrop-blur-sm flex justify-center items-center animate-fade"
      onClick={() => setShowForm(false)}
    >
      <div
        className="w-[40rem] bg-background/50 animate-scale rounded-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header flex justify-between rounded-md items-center p-4 bg-[#9096ff] text-white">
          <h5 className="text-lg font-semibold">{title}</h5>
          <span
            className="cursor-pointer text-2xl"
            onClick={() => setShowForm(false)}
            aria-label="Close form"
          >
            <AiOutlineClose />
          </span>
        </header>

        <div className="modal-body p-6">{children}</div>
      </div>
    </div>
  );
}