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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            nostrum sequi at earum veritatis ducimus quam optio quisquam error
            temporibus quasi unde itaque necessitatibus exercitationem, nemo
            atque veniam totam? Inventore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis unde, nesciunt tempora odio nam praesentium
            consequuntur maxime consectetur hic. Odit aliquid doloremque
            deleniti voluptatibus dolores, voluptas officiis dolor nobis rerum?
          </p>
          <b className="text-gray-800"> Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            molestias nemo nihil repellendus cupiditate eaque a veritatis minus
            necessitatibus laudantium, temporibus repellat eligendi expedita
            eius tenetur commodi ipsa voluptatem optio.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex maiores, dicta ab in vitae impedit dolorem! Dicta harum et at cupiditate aliquid consequuntur maiores ipsum? Vero enim aliquam veniam!</p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex maiores, dicta ab in vitae impedit dolorem! Dicta harum et at cupiditate aliquid consequuntur maiores ipsum? Vero enim aliquam veniam!</p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex maiores, dicta ab in vitae impedit dolorem! Dicta harum et at cupiditate aliquid consequuntur maiores ipsum? Vero enim aliquam veniam!</p>
           </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
