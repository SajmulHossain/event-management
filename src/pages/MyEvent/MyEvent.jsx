import { useQuery } from "@tanstack/react-query";
import CardLoader from "../../components/CardLoader";
import Heading from "../../components/Heading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Event from "../Events/Event";
import NoData from "../../components/noData";



const MyEvent = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();


  const { data: events = [...Array(9)], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/events?email=${user?.email}`
      );
      return data.data || [];
    },
  });

  return (
    <section className="section">
      <Heading
        heading={"Your Events"}
        paragraph={"Events that you have added"}
      />
      <div className={`${events.length ? 'grid': 'block'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
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

export default MyEvent;
