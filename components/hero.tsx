import ModalVideo from "@/components/modal-video";
import herothumb from "@/public/images/herothumb.jpg";
import "./css/scroll.css"

export default function Hero() {
 return (
  <section className="relative">
   {/* Illustration behind hero content */}
   <div
    className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-1"
    aria-hidden="true"
   >
    <svg
     width="1360"
     height="578"
     viewBox="0 0 1360 578"
     xmlns="http://www.w3.org/2000/svg"
    >
     <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
       <stop stopColor="#FFF" offset="0%" />
       <stop stopColor="#EAEAEA" offset="77.402%" />
       <stop stopColor="#DFDFDF" offset="100%" />
      </linearGradient>
     </defs>
     <g fill="url(#illustration-01)" fillRule="evenodd">
      <circle cx="1232" cy="128" r="128" />
      <circle cx="155" cy="443" r="64" />
     </g>
    </svg>
   </div>

   <div className="max-w-6xl px-4 mx-auto sm:px-6">
    {/* Hero content */}
    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
     {/* Section header */}
     <div className="pb-12 text-center md:pb-16">
      <h1
       className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
       data-aos="zoom-y-out"
      >
       Elevate Your{" "}
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Beauty
       </span>
      </h1>
      <div className="max-w-3xl mx-auto">
       <p
        className="mb-8 text-xl text-gray-600"
        data-aos="zoom-y-out"
        data-aos-delay="150"
       >
        Experience the perfect fusion of tranquility and transformation at our
        aesthetics spa. Indulge in luxurious treatments that rejuvenate your
        body and uplift your spirit, unlocking a radiant beauty that radiates
        from within.
       </p>
       <div
        className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
       >
        <div>
         <a
          className="w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0"
          href="#services"
         >
          Our Services
         </a>
        </div>
        <div>
         <a
          className="w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
          href="#0"
         >
          Contact Us
         </a>
        </div>
       </div>
      </div>
     </div>

     {/* Hero image */}
     <ModalVideo
      thumb={herothumb}
      thumbWidth={768}
      thumbHeight={432}
      thumbAlt="Modal video thumbnail"
      video="/videos/video.mp4"
      videoWidth={1920}
      videoHeight={1080}
     />
    </div>
   </div>
  </section>
 );
}
