import man from '../assets/man.jpeg'
import woman from '../assets/woman.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <div className="m-3/4 m-auto bg-gray-400 p-10">
            <h1 className='text-white flex justify-center text-3xl'>TESTIMONIALS</h1>
            <div className="mt-10">
              <Slider {...settings}>
                {testiData.map((d)=>
                  <div className='min-h-[450px] bg-white text-black rounded-xl'>
                    <div className='h-56 flex justify-center items-center bg-slate-700 rounded-t-xl'>
                      <img src={d.img} alt="" className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center  gap-4 p-4'>
                      <p className='font-semibold text-2xl text-center'>{d.name}</p>
                      <p className='text-center'>{d.review}</p>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          
        </div>;
};

const testiData = [
  {
    name: `Robert Sendel`,
    img: man,
    review:
      "The service was exceptional from start to finish. The team went above and beyond to ensure everything was perfect. Highly recommend!",
  },
  {
  name: "Bolaji Amusan",
    img: man,
    review:
      "I was thoroughly impressed with the quality and attention to detail. The customer service was friendly and responsive. Will definitely use again!",
  },
  {
    name: "Mujaida Ola",
      img: woman,
      review:
        "An outstanding experience! The results exceeded my expectations, and the staff was incredibly helpful and professional throughout the entire process.",
    },
    {
      name: "Kudi Pawa",
        img: man,
        review:
          "From the initial consultation to the final delivery, everything was handled with the utmost care and professionalism",
      },
      {
        name: "Jun pio",
          img: woman,
          review:
            "Our new website is fantastic! The developers were professional, attentive, and delivered exactly what we needed. The site is fast, user-friendly, and visually appealing",
        },
];

export default Testimonial;
