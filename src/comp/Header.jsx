import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


function Header() {
  const [scrollTop, setScrollTop] = useState(0);

useEffect(() => {
  function handleScroll() {
    setScrollTop(window.pageYOffset)
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
 
  return (
    <>
      <section id='1' className="bg-[#FF824A] w-full text-center py-2">
        <p className="text-white">
          Monsoon Sale!! Get Lifetime Excess To Our Premium WordPress Theme With Straight 20% Off Use The Code "MSoon21"
          <a className='bg-[#E3662E] text-white  p-1 mx-2 rounded' href="">BUY NOW</a>
        </p>
      </section>

      <section className="  m-auto w-fit md:flex justify-between py-4 items-center">
        <div>
          <img src="https://preview.colorlib.com/theme/karma/img/logo.png" alt="" />
        </div>
        <div >
          <ul className="flex  text-lg items-center">
            <li className=" border-r border-black mx-3 px-4">
              <i className="bi bi-telephone-fill px-1  border rounded-full text-[25px] shadow mx-3"></i>
              Call: + 1234567890
            </li>
            <li className=" border-r border-black mx-3 px-4">
              <i className="bi bi-envelope px-1 border text-[25px] rounded-full shadow mx-3"></i>
              info@reatstate.com
            </li>
            <li className="px-3"><i className="bi bi-facebook text-[25px] "></i></li>
            <li className="px-3"><i className="bi bi-twitter text-[25px]"></i></li>
            <li className="px-3"><i className="bi bi-instagram text-[25px]"></i></li>
            <li className="px-3"><i className="bi bi-linkedin text-[25px]"></i></li>
          </ul>
        </div>
      </section>


      <header className={`${scrollTop > 170 ? 'sticky top-0 bg-[#E3662E] py-8 rounded-bl-lg ' : 'absolute'} md:w-[1000px]  top-[150px] left-[170px] z-50 flex justify-between text-[20px] text-black font-bold`}>
           
           <ul className="flex ">
             <li className="px-5"><Link to="/">Home</Link></li>
             <li className="px-5">Admin Panel</li>
             <li className="px-5">Web Mail</li>
             <li className="px-5">Contact</li>
           </ul>
         
         
           <ul className="flex">
             <li><i className="bi bi-search px-5"></i></li>
             <li><i className="bi bi-person-fill px-5"></i></li>
             <li><i className="bi bi-cart px-5"></i></li>
           </ul>
         
       </header>


    </>
  )
}

export default Header