import Rating from "react-rating";
import Heading from "../../components/Heading";
import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonial = () => {
    const testimonials = [
      {
        id: 1,
        name: "Daniel Johnson",
        role: "Marketing Director",
        company: "TechVista Solutions",
        rating: 5,
        testimonial:
          "This platform revolutionized how we organize corporate events! Seamless registration and real-time analytics increased our engagement by 40%.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Wedding Planner",
        company: "Eternal Moments",
        rating: 5,
        testimonial:
          "Saved me 10+ hours per event with timeline scheduling. The mobile check-in feature is a game-changer for weddings!",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: 3,
        name: "Ahmed Mohammed",
        role: "Community Manager",
        company: "Fitness Expo",
        rating: 4,
        testimonial:
          "Crowd heatmaps helped optimize our booth placements. Would love multilingual support for international events!",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      },
      {
        id: 4,
        name: "James Wilson",
        role: "Corporate Trainer",
        company: "SkillFront",
        rating: 5,
        testimonial:
          "Centralized dashboard for our 12-city workshop tour provided invaluable ROI insights. Flawless execution!",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      },
      {
        id: 5,
        name: "Raj Patel",
        role: "Nonprofit Coordinator",
        company: "GreenEarth Initiative",
        rating: 4,
        testimonial:
          "Ticket sales integration helped us raise $120K+ at our fundraiser. Support team resolved my queries within hours.",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      },
      {
        id: 6,
        name: "David Kim",
        role: "Startup Founder",
        company: "NextGen Tech",
        rating: 5,
        testimonial:
          "AI-powered attendee matchmaking led to 60% more post-event connections. Our investors were impressed!",
        avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      },
    ];

    return (
      <section className="section">
        <Heading
          heading="Testimonial"
          paragraph="See Our Happy Client What Said"
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((data) => (
            <div key={data.id} className="bg-main/30 p-4 rounded-box flex flex-col justify-between">
              <Rating
                initialRating={data.rating}
                emptySymbol={<FaRegStar size={24} />}
                fullSymbol={<FaStar size={24} />}
              />
              <p className="my-4">{data.testimonial}</p>
              <div className="flex items-center gap-2">
                <img
                  className="h-20 w-20 rounded-selector object-cover"
                  src={data.avatar}
                  alt={`${data.name}'s avatar`}
                />
                <div>
                  <h3 className="font-semibold text-xl">{data.name}</h3>
                  <p className="italic text-sm text-gray-500">{data.role}</p>
                  <p className="text-sm">{data.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;