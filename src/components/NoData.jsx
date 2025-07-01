import Lottie from "lottie-react";
import noDataJson from "../assets/lottie/noData.json";

const NoData = () => {
  return <div className="flex-center">
    <Lottie animationData={noDataJson} />
  </div>;
};

export default NoData;
