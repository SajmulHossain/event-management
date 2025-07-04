import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRef } from "react";
import toast from "react-hot-toast";
import { CiCalendar, CiClock1, CiUser } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { error_msg } from "../../utils/error.msg";
import Swal from "sweetalert2";

const Event = ({ event }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const btnRef = useRef(null);
  const { pathname } = useLocation();

  const {
    _id,
    title,
    description,
    date_and_time,
    location,
    attendeeCount,
    author_name,
    joiningPeoples,
  } = event || {};

  const isJoined = joiningPeoples?.find((people) => people === user?.email);

  const { mutateAsync: joinEvent, isPending: joiningEvent } = useMutation({
    mutationKey: ["join event"],
    mutationFn: async (body) => {
      await axiosSecure.patch(`/events/${_id}`, body);
    },
    onSuccess: () => {
      btnRef.current.disabled = true;
      toast.success("Done");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (error) => {
      error_msg(error?.response?.data?.message);
    },
  });

  // *delete event
  const { mutateAsync: deleteEvent, isPending: isDeleting } = useMutation({
    mutationKey: ["delete event"],
    mutationFn: async () => {
      const { data } = await axiosSecure.delete(
        `/events/${_id}?email=${user.email}`
      );
      if (data?.success) {
        toast.success("Event Deleted Successfully");
        queryClient.invalidateQueries({ queryKey: ["events"] });
      }
    },
    onError: (error) => {
      error_msg(error?.response?.data?.message);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvent();
      }
    });
  }

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

          <p className="flex items-center gap-1 justify-end">
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
          {pathname !== "/my-event" ? (
            <button
              ref={btnRef}
              onClick={() => joinEvent({ user_email: user.email })}
              disabled={isJoined || !user}
              className={`btn disabled:text-gray-400 ${
                joiningEvent ? "cursor-not-allowed pointer-events-none" : ""
              }`}
            >
              {joiningEvent ? (
                <span className="flex items-center gap-2">
                  Joinnig
                  <Loading />
                </span>
              ) : isJoined ? (
                "Joined"
              ) : (
                "Join Event"
              )}
            </button>
          ) : (
            <div className="space-x-2">
              <button
                className="btn btn-warning"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                Delete Event {isDeleting && <Loading />}
              </button>
              <Link to={`/edit/${_id}`} className="btn bg-main border-none">Edit</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
