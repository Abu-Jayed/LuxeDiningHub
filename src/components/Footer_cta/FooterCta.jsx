import React from 'react';
import footer_cta from '../../assets/footer_cta.png'
import './footerCta.css'

const FooterCta = () => {
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('hi');
  }
  return (
    <div className='footer_cta'>

      <div className=' max-w-[500px] mx-auto  '>

      <div className='cta_title text-[#5a5a5a] text-center  '>
      <div className="">
        <h2 className='mb-[15px] text-black text-[48px] font-bold  '>Be the first to know</h2>
        <p className='cta_para font-normal'>Want to know what’s hot off the menu? Then do subscribe to the newsletter of Cacao Bean Restaurant & Café.</p>
      </div>
    </div>

      <div className="cta_form mt-[30px] p-[30px] flex justify-center">

        <div className='mb-[15px]'>
      <form>
      <input style={{ fontFamily: "'Poppins', sans-serif" }} className=" placeholder:text-slate-500 block bg-white w-[440px] h-[50px] border border-slate-300 rounded-md py-2 pl-4 pr-3 mb-4 shadow-sm focus:outline-none focus:border-sky-500 focus:border  focus:ring-1 cta_input " placeholder="Just add your email" type="text" name="search"/>
      <input onClick={handleSubmit} type="submit" value="Subcribe Now" className=' cta_submit w_button rounded-md' />
      </form>
        </div>
    </div>

    </div>

    </div>
  );
};

export default FooterCta;