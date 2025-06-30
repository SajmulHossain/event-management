import { CiCalendar, CiClock1, CiUser } from "react-icons/ci";
import { format } from "date-fns";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";

const Event = ({ event }) => {
  const {
    title,
    description,
    date_and_time,
    location,
    attendeeCount,
    author_email,
    author_name,
  } = event || {};
  return (
    <div className="card bg-sec text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="flex items-center">
          <p className="flex items-center gap-1">
            <CiCalendar size={20} />
            <span>{format(new Date(date_and_time), "cccc, dd MMM yyyy")}</span>
          </p>

          <p className="flex items-center gap-1">
            <CiClock1 size={20} />
            <span>{format(new Date(date_and_time), "h: mm BBBB")}</span>
          </p>
        </div>

        <p className="flex items-center gap-1">
          <IoLocationOutline size={20} /> <span>{location}</span>
        </p>

          <p className="flex items-center gap-1">
            <CiUser size={20} />
            <span>{author_name}</span>
          </p>
          <p className="flex items-center gap-2 btn w-fit bg-main border-none">
            <FaUserTie size={20} />
            {attendeeCount}
          </p>

        <div className="card-actions justify-end">
          <button className="btn">Join Event</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
