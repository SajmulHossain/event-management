import { CiCalendar, CiClock1, CiUser } from "react-icons/ci";
import { format } from "date-fns";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { error_msg } from "../../utils/error.msg";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const Event = ({ event }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const {
    _id,
    title,
    description,
    date_and_time,
    location,
    attendeeCount,
    author_name,
  } = event || {};


  const {mutateAsync:joinEvent, isPending: joiningEvent} = useMutation({
    mutationKey: ['join event'],
    mutationFn: async(body) => {
      await axiosSecure.patch(`/events/${_id}`, body)
    }, 
    onSuccess: () => {
      toast.success("Done");
      queryClient.invalidateQueries({queryKey: ['events']})
    },
    onError: error => {
      error_msg(error?.response?.data?.message)
    }
  })

  return (
    <div className="card bg-sec text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="flex items-center mt-4">
          <p className="flex items-center gap-1">
            <CiCalendar size={20} />
            <span>
              {format(
                new Date(date_and_time || new Date()),
                "cccc, dd MMM yyyy"
              )}
            </span>
          </p>

          <p className="flex items-center gap-1">
            <CiClock1 size={20} />
            <span>
              {format(new Date(date_and_time || new Date()), "h: mm BBBB")}
            </span>
          </p>
        </div>

        <p className="flex items-center gap-1">
          <IoLocationOutline size={20} /> <span>{location}</span>
        </p>

        <p className="flex items-center gap-1">
          <CiUser size={20} />
          <span>{author_name}</span>
        </p>
        <p className="flex items-center gap-2 btn w-fit bg-main border-none shadow-2xl">
          <FaUserTie size={20} />
          {attendeeCount}
        </p>

        <div className="card-actions justify-end">
          <button
            onClick={() => joinEvent({ user_email: user.email })}
            disabled={joiningEvent}
            className="btn"
          >
            Join Event {joiningEvent && <Loading />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
