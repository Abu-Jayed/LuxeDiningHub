import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import blog_img_1 from '../../assets/blog/blog_img_1.png'
import blog_img_2 from '../../assets/blog/blog_img_2.png'
import blog_img_3 from '../../assets/blog/blog_img_3.png'

const Article = () => {
  const blog_img = [
    blog_img_1,
    blog_img_2,
    blog_img_3
  ]

  const blogs = [
    {
      heading: 'When the yeast is activated',
      paragrach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nulla aliquam ut feugiat amet tempus et imperdiet. Tempus iaculis '
    },
    {
      heading: 'When the yeast is activated',
      paragrach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nulla aliquam ut feugiat amet tempus et imperdiet. Tempus iaculis '
    },
    {
      heading: 'When the yeast is activated',
      paragrach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nulla aliquam ut feugiat amet tempus et imperdiet. Tempus iaculis '
    },
  ]


  return (
  <section>
    <div className='max-w-[560px] mb-[65px] mx-auto text-center ' >
      <div id='review_title' className=''>
    <div id='review_text' className='relative max-w-[100px] mx-auto text-center  '>
<h4 className='text-black text-2xl italic font-[500]  '>Article</h4>
<div className='absolute w-[75px] h-[9px] bg-[#ffca0e] left-[12px] top-[20px] -z-10  '></div>
    </div>
    <div className='flex items-center justify-center mt-[7px] '>
      <AiFillStar className='text-[#ffca0e]'></AiFillStar>
      <AiFillStar className='text-[#ffca0e]'></AiFillStar>
      <AiFillStar className='text-[#ffca0e]'></AiFillStar>
      <AiFillStar className='text-[#ffca0e]'></AiFillStar>
      <AiFillStar className='text-[#ffca0e]'></AiFillStar>
    </div>
      </div>
    <h2 className='mt-[10px] text-black text-center text-[48px] font-extrabold  ' style={{lineHeight: '58px'}} >All Latest News</h2>
    <p className='mt-[15px] text-[#5a5a5a] leading-[26px] '>Located in downtown Burlington near the shores of Lake Champlain, we give you space to be yourself and room</p>
    </div>

    <section>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 px-4'>
    {
      blogs.map( (blog,index) => {
        return <div>
          <img src={blog_img[index]} alt="" className='rounded-t-xl' />
          <div className='border mb-8 border-[#e1e1e1] rounded-b-xl  '>
          <h1 className='mt-10 text-black text-2xl font-[600] leading-[38px] text-center '>{blog.heading}</h1>
          <p className='text-center text-[#5a5a5a] mt-4 text-[18px]  '>{blog.paragrach}</p>
          <p className='cursor-pointer mt-[20px] mb-[20px] text-black underline text-center font-semibold font-[Poppins,sans-serif] '>Learn More</p>
          </div>
        </div>
      })
    }
      </div>
      <div className='text-center mt-2 mb-40'>
        
    <button className="font-bold ml-[125px] md:ml-4 main_button ">
      View More
    </button>
      </div>
    </section>
  </section>
  );
};

export default Article;