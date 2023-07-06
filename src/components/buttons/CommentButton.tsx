import CommentSection from "../CommentSection";
import Modal from "../layout/Modal";
import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid"

export default function CommentButton({ hideText} : { hideText?: boolean}) {
  const commentButton = 
  <>
    <ChatBubbleLeftIcon className="h-6 w-6" />
    12 {!hideText && <span className="hidden sm:inline-flex">Comments</span>} 
  </>

  return (
    <Modal
      content={<CommentSection />}
      openButtonClasses="btn-ghost"
      openButtonText={commentButton}
    />
  );
}
