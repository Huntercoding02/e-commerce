import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nostrum sequi at earum veritatis ducimus quam optio quisquam error temporibus quasi unde itaque necessitatibus exercitationem, nemo atque veniam totam? Inventore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde, nesciunt tempora odio nam praesentium consequuntur maxime consectetur hic. Odit aliquid doloremque deleniti voluptatibus dolores, voluptas officiis dolor nobis rerum?</p>
      </div>
      </div>
    </div>
  )
}

export default About