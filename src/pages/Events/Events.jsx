import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Event from "./Event";
import CardLoader from "../../components/CardLoader";
import FilterBox from "./FilterBox";
import { useState } from "react";
import NoData from "../../components/noData";

const Events = () => {
  const axiosSecure = useAxiosSecure();
  const [time, setTime] = useState("");
  const [search, setSearch] = useState("");

  const { data: events = [...Array(9)], isLoading } = useQuery({
    queryKey: ["events", time, search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/events?time=${time}&search=${search}`
      );
      return data.data || [];
    },
  });
  return (
    <section className="section">
      <FilterBox setTime={setTime} setSearch={setSearch} />
      <div
        className={`${
          events.length ? "grid" : "block"
        } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {isLoading ? (
          events.map((_, i) => <CardLoader key={i} />)
        ) : events?.length ? (
          events.map((event) => <Event key={event?._id} event={event} />)
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
};

export default Events;
