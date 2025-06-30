import toast from "react-hot-toast"

export const error_msg = (message) => {
   return message && toast.error(message || `Something Went Wrong`)
}