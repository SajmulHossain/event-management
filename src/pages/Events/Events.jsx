import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Event from "./Event";
import CardLoader from "../../components/CardLoader";
import FilterBox from "./FilterBox";

const Events = () => {
  const axiosSecure = useAxiosSecure();

  const { data: events = [...Array(9)], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axiosSecure("/events");
      return data.data || [];
    },
  });
  return (
    <section className="section">
        <FilterBox />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? events.map((_, i) => <CardLoader key={i} />)
          : events.map((event) => <Event key={event?._id} event={event} />)}
      </div>
    </section>
  );
};

export default Events;
