import React from 'react';
// import './subscription.css'

const Subscription = (event) => {
  const handleSubmit = () =>{
  event.preventDefault();
    console.log('ji');
  }
  return (
    <div className='cta_bg mx-2'>
      <div className='container '>
    <div className='cta_form'>
      <div className="cta_title">
        <h2 className='cta_heading'>Be the first to know</h2>
        <p className='cta_para'>Want to know what’s hot off the menu? Then do subscribe to the newsletter of Cacao Bean Restaurant & Café.</p>
      </div>
    </div>
    <div className="cta_form">
      <form>
      <input class=" placeholder:text-slate-500 block bg-white w-[440px] h-[50px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:border  focus:ring-1 cta_input " placeholder="Just add your email" type="text" name="search"/>
      <input onClick={handleSubmit} type="submit" value="Subcribe Now" className='cta_submit' />
      </form>
    </div>
      </div>
    </div>
  );
};

export default Subscription;