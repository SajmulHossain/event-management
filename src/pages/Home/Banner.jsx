import { motion } from "motion/react";

const Banner = () => {
  //   https://i.ibb.co/Dfs6CW20/img1.jpg
  // https://i.ibb.co/k2hqVxWY/img2.jpg
  // https://i.ibb.co/nqGhdyMQ/img3.jpg
  // https://i.ibb.co/HLwttwWz/img4.jpg
  // https://i.ibb.co/Vp0jxjQR/img5.jpg
  // https://i.ibb.co/9kF0sCpp/img6.jpg
  return (
    <section className="relative bg-[url(./assets/hero/hero.jpg)] bg-cover bg-center h-screen">
      <div className="flex-center h-full">
        <div className="text-white mr-auto px-4">
          <h3 className="font-cursive text-4xl mb-12">
            Find Your Next Experience
          </h3>
          <h1 className="text-6xl md:text-7xl font-bold text-main">
            Discover & Promote <br /> Upcoming Event
          </h1>
        </div>
      </div>
      <motion.div
        className="absolute hidden lg:block top-36 right-32 w-52"
        initial={{ x: 50, y: 20 }}
        animate={{ x: [50, 40, 50], y: [20, 30, 20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="https://i.ibb.co/Vp0jxjQR/img5.jpg" className="rounded-box" />
      </motion.div>
      <motion.div
        className="absolute hidden lg:block top-52 left-1/2 w-52"
        initial={{ x: 50, y: 20 }}
        animate={{
          x: [50, 40, 50],
          y: [20, 30, 20],
          rotate: [0, 1, 0, 1, 0, 2, 1, 2, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="https://i.ibb.co/k2hqVxWY/img2.jpg" className="rounded-box" />
      </motion.div>
      <motion.div
        className="absolute hidden lg:block bottom-20 left-2/3 w-52"
        initial={{ x: 50, y: 20 }}
        animate={{
          x: [10, 40, 10],
          y: [10, 30, 10],
          rotate: [1, 2, 1, 2, 1, 2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="https://i.ibb.co/9kF0sCpp/img6.jpg" className="rounded-box" />
      </motion.div>
    </section>
  );
};

export default Banner;
