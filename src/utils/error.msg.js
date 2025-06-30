import toast from "react-hot-toast"

export const error_msg = (message, state) => {
    message && toast.error(message || `Something Went Wrong ${state || ''}`)
}