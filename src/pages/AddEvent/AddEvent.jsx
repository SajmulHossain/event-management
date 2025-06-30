import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { error_msg } from "../../utils/error.msg";

const AddEvent = () => {
  const { user } = useAuth();
  const [date, setDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["event"],
    mutationFn: async (body) => {
      const { data } = await axiosSecure.post("/events", body);
      if (data.success) {
        toast.success(data?.message);
      }
    },
    onError: (error) => {
      error_msg(error?.response?.data?.message);
    },
  });

  const handleAddEvent = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const description = form.description.value;
    const attendeeCount = form.attendeeCount.value;

    if (!title || !location || !description || !attendeeCount) {
      return error_msg("Please give all value");
    }

    const data = {
      title,
      location,
      description,
      attendeeCount,
      date_and_time: date,
      author_name: user.name,
      author_email: user.email,
    };

    await mutateAsync(data);
    form.reset();
  };

  return (
    <section className="section flex-center h-screen my-0">
      <fieldset className="fieldset bg-main/70 border-base-300 rounded-box max-w-xl w-full border p-4 shadow-2xl shadow-main">
        <legend className="fieldset-legend text-3xl">Add Event</legend>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <div>
            <label className="label">Event Title</label>
            <input
              type="text"
              className="input"
              placeholder="Event Title"
              name="title"
            />
          </div>

          <div>
            <label className="label">Author</label>
            <input
              type="text"
              className="input"
              defaultValue={user?.name}
              readOnly
              placeholder="Name"
            />
          </div>

          <div>
            <label className="label">Date and Time</label>
            <DateTimePicker className="input" onChange={setDate} value={date} />
          </div>

          <div>
            <label className="label">Location</label>
            <input
              type="text"
              className="input"
              placeholder="e.g. IPDB Bhabon, Kakrail More, Dhaka"
              name="location"
            />
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              className="input textarea"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>

          <div>
            <label className="label">Attendee Count</label>
            <input
              type="number"
              className="input"
              placeholder="If you have pre registered attendee, then give it. Otherwise leave it"
              defaultValue={0}
              name="attendeeCount"
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn bg-sec border-0 text-white shadow-lg"
              disabled={isPending}
            >
              Add Event {isPending && <Loading />}
            </button>
          </div>
        </form>
      </fieldset>
    </section>
  );
};

export default AddEvent;
