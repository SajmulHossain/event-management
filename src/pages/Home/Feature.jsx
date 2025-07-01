import Heading from "../../components/Heading";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import CardLoader from "../../components/CardLoader";
import Event from "../Events/Event";
import { Link } from "react-router";
const Feature = () => {
  const {data: events = [...Array(6)], isLoading} = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const { data } = await axiosSecure("/public/featured");
      return data.data || [];
    },
  });

  return (
    <section className="bg-sec/40">
      <div className="section">
        <Heading heading="Feature Events" paragraph={"Upcoming Events"} />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            events?.map((event,index) => isLoading ? <CardLoader key={index} /> : <Event key={event?._id} event={event} /> )
          }
        </div>
        <div className="text-center mt-8">
          <Link to='/events' className="btn bg-main border-none">See More Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
