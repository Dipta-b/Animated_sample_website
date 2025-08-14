import firstImage from "../../assets/news-img/imageOne.jpg";
import TwoImage from "../../assets/news-img/imagetwo.jpg";
import ThirdImage from "../../assets/news-img/imageThree.jpg";
import FourImage from "../../assets/news-img/imageFour.jpg";
import FiveImage from "../../assets/news-img/imageFive.jpg";
import { motion } from "motion/react";
const LatestNews = () => {
  return (
    <div>
      <h2 className="text-4xl mb-4">Latest News...</h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px] ">
        <div className="h-full">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={firstImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="row-span-2 h-full">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={TwoImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="h-full">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={ThirdImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="h-full">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={FourImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="h-full">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={FiveImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
