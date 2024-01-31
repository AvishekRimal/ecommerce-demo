import React from 'react'

function Footer() {
    return (
        <>
            <section>
                <div className="relative py-[44px 0px]  ">
                    <img src="https://sangalotech.com/html/15/assets/images/footer-bg.jpg" alt="Image 1" className="w-100 h-[600px]  object-cover rounded-md" />
                    <div className=" py-5 absolute top-[170px] left-[50px] flex gap-10 border-b border-white">
                        <ul className="text-white">
                            <li className="text-[40px]  font-bold py-7">KITTER</li>
                            <li><p>If you have any question, please contact us at <br /> <span className="text-[#F1642C]"> support@gmail.com</span> </p></li>
                            <li className="py-[20px]">30 Buttonwood St.Pataskala OH 43062</li>
                            <li className="">(+1)-6234-56-789-1011</li>
                            <ul className="flex py-[20px]">
                                <li className=""><i className="bi bi-facebook text-[25px] "></i></li>
                                <li className="px-3"><i className="bi bi-twitter text-[25px]"></i></li>
                                <li className="px-3"><i className="bi bi-instagram text-[25px]"></i></li>
                                <li className="px-3"><i className="bi bi-linkedin text-[25px]"></i></li>
                            </ul>
                        </ul>



                        <ul className="text-white leading-10 px-7">
                            <li className="text-[40px]  font-bold py-7">Corporate</li>
                            <li>Careers</li>
                            <li className="">About Us</li>
                            <li className="">Contact Us</li>
                           
                                <li className="">FAQs</li>
                                <li className="">Vendors</li>
                                <li className="">Affiliate Program</li>
                        </ul>

                        <ul className="text-white leading-10 px-7">
                            <li className="text-[40px]  font-bold py-7">Information</li>
                            <li>Careers</li>
                            <li className="">Online Store</li>
                            <li className="">Privacy Policy</li>
                           
                                <li className="">Refund Policy</li>
                                <li className="">Shipping Policy</li>
                                <li className="">Track Order</li>
                        </ul>


                        <ul className="text-white leading-10 px-7">
                            <li className="text-[40px]  font-bold py-7">Services</li>
                            <li>Careers</li>
                            <li className="">Grooming</li>
                            <li className="">Positive Dog Training</li>
                           
                                <li className="">Veterinary Services</li>
                                <li className="">Petco Insurance</li>
                                <li className="">Pet Adoption</li>
                        </ul>


                    </div>

                    <div className=" absolute bottom-[10px] left-[450px]">
                        <ul className="">
                           <img src="https://sangalotech.com/html/15/assets/images/payment.png" alt="" />
                        </ul>
                    </div>


                </div>
            </section>

        </>
    )
}

export default Footer