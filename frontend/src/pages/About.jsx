import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Forever is more than a brand; it's a movement fueled by a passion for innovation and a commitment to reshaping the online shopping experience. Born out of a desire to create something extraordinary,
          </p>
          <p>
          we aim to make every shopping journey seamless, personalized, and inspiring. At Forever, we believe that shopping should be as unique as each individual, and we strive to create a platform that reflects this.
          </p>
          <b className="text-gray-800"> Our Mission</b>
          <p>
          Our mission is to revolutionize the online shopping landscape by blending innovation with simplicity, empowering our customers to discover and connect with products in a meaningful way. We are dedicated to setting new standards in convenience, customization, and customer satisfaction, making Forever the go-to destination for a truly transformative shopping experience.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 ">At Forever, we are committed to providing top-tier quality in every product we offer. Our rigorous quality standards ensure that each item meets our excellence criteria, giving our customers confidence in every purchase they make.</p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 ">We prioritize a seamless and hassle-free shopping experience. From easy navigation to fast, reliable shipping, our platform is designed to make shopping more convenient, enabling customers to browse and buy with ease from any device, anywhere.</p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 ">Our team is dedicated to making every interaction exceptional. We provide personalized support to ensure that each customer's needs are met, and their questions answered, creating an experience that feels both supportive and friendly.</p>
           </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
