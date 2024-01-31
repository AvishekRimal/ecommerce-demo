import React from 'react'
import Category from '../data/data'
import { product} from '../data/data';
import { Link } from 'react-router-dom';



function Home() {
  const firstSevenCategories = Category.slice(0, 100);
  const smartphones = product.filter(item => item.category === 'smartphones').slice(0, 5);
  const laptop = product.filter(item => item.category === 'laptops').slice(0, 5);

  return (
    <>


    <a href='#' id='1' className="fixed bottom-11 right-11 z-50 text-[40px] border bg-[#F9942A] rounded-full hover:text-[50px] hover:bg-[black] hover:text-[#F9942A]">
    <i className="bi bi-rocket-fill"></i>
    </a>



      <div>
        <section className=" mx-auto">
          <div className=" relative">
            <img src="https://sangalotech.com/html/15/assets/images/hero-banner.jpg" className="w-full" />
          </div>
        </section>
      </div>





      <section className="container m-auto">
        <div>
          <h1 className="  text-center text-[30px] font-bold py-9"> <span className="text-[#F9942A]">T</span>op <span className="text-[#F9942A]">C</span>ategories</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {firstSevenCategories.map((a, i) => (
            <div key={i} className="m-4 max-w-xs rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                
                <Link to={`/cat/${a}`}><div className="font-bold text-xl mb-2">{a}</div></Link> 
              </div>
            </div>
          ))}
        </div>
      </section>






      <div className=" container m-auto  md:flex justify-between items-center py-8 px-4">
        <div className="relative">
          <img src="https://sangalotech.com/html/15/assets/images/offer-banner-1.jpg" alt="Image 1" className="w-100 h-64 object-cover rounded-md" />
          <div className="absolute top-[50px] left-[20px]">
            <p>SELECTED ITEMS. ONLINE ONLY.</p>
            <h2 className="text-black text-lg font-semibold py-5">
              Hot Summer <br />
              Deals</h2>
          </div>
        </div>
        <div className="relative">
          <img src="https://sangalotech.com/html/15/assets/images/offer-banner-2.jpg" alt="Image 2" className="w-100 h-64 object-cover rounded-md" />
          <div className="absolute top-[50px] left-[20px]">
            <p>TREATS & GROOMING</p>
            <h2 className="text-black text-lg font-semibold py-5">
              Spoil your true <br />
              love</h2>
          </div>
        </div>
        <div className="relative">
          <img src="https://sangalotech.com/html/15/assets/images/offer-banner-3.jpg" alt="Image 3" className="w-100 h-64 object-cover rounded-md" />
          <div className="absolute top-[50px] left-[20px]">
            <p>OUR BRAND YOU WILL LOVE</p>
            <h2 className="text-black text-lg font-semibold py-5">
              New in this <br />
              year</h2>
          </div>
        </div>
      </div>








      <section className="container m-auto">
        <div>
          <h1 className="  text-center text-[30px] font-bold py-9"> <span className="text-[#F9942A]">S</span>mart <span className="text-[#F9942A]">P</span>hones</h1>
        </div>
        <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {smartphones.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <Link to={`/details/${item.id}`} className="text-xl font-bold mb-2 bg-[#F9942A] p-2 rounded hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>





      <section className="container m-auto">
        <div>
          <h1 className="  text-center text-[30px] font-bold py-9"> <span className="text-[#F9942A]">L</span>aptop </h1>
        </div>
        <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {laptop.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <Link to={`/details/${item.id}`} className="text-xl font-bold mb-2 bg-[#F9942A] p-2 rounded hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>












      <section>
        <div className="relative">
          <img src="https://sangalotech.com/html/15/assets/images/cta-bg.jpg" alt="Image 1" className="w-100 h-[550px]  object-cover rounded-md" />
          <div className="absolute top-[50px] left-[20px]">
            <img src="https://sangalotech.com/html/15/assets/images/cta-banner.png" alt="" className="h-[500px]" />
          </div>
          <div className="absolute top-[150px] left-[600px]">
            <img className="py-8" src="https://sangalotech.com/html/15/assets/images/cta-icon.png" alt="" />
            <h1 className="text-[35px] p-0">Taste it, love it or we’ll replace it…  <br /> Guaranteed!</h1>
            <p>At Petio, we believe your dog and cat will love their food so much that if they don’t … <br /> we’ll help you find a replacement. That’s our taste guarantee.</p>
            <button className=" my-5 rounded-full bg-black text-white py-2 px-3">Find Out More</button>
          </div>
        </div>
      </section>







      <section className="container m-auto py-10">
        <div>
          <h1 className="  text-center text-[30px] font-bold py-9"> <span className="text-[#F9942A]">P</span>opular <span className="text-[#F9942A]">B</span>rands</h1>
        </div>
        <div className="flex justify-center gap-9">
          <div className=" border-r border-black px-4">
            <img src="https://sangalotech.com/html/15/assets/images/brand-1.jpg" alt="" />
            <p className="text-center">food</p>
          </div>
          <div className=" border-r border-black px-4">
            <img src="https://sangalotech.com/html/15/assets/images/brand-2.jpg" alt="" />
            <p className="text-center">food</p>
          </div>
          <div className=" border-r border-black px-4">
            <img src="https://sangalotech.com/html/15/assets/images/brand-3.jpg" alt="" />
            <p className="text-center">food</p>
          </div>
          <div className=" border-r border-black px-4">
            <img src="https://sangalotech.com/html/15/assets/images/brand-4.jpg" alt="" />
            <p className="text-center">food</p>
          </div>
          <div>
            <img src="https://sangalotech.com/html/15/assets/images/brand-5.jpg" alt="" />
            <p className="text-center">food</p>
          </div>
        </div>
      </section>







    </>
  )
}

export default Home