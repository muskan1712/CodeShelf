import React from 'react';
import news1 from "../../assets/news/news1.png" ;
import news2 from "../../assets/news/news2.png" ;
import news3 from "../../assets/news/news3.png" ;
import news4 from "../../assets/news/news4.png" ;
import {Swiper , SwiperSlide} from 'swiper/react' ;
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom';
const news = [
  {
    id: 1,
    title: "Vibe Coding Is Coming for Engineering Jobs",
    description:
      "New research from Stanford provides the clearest available evidence that AI is reshaping the workforce—but it’s complicated.",
    image: news1,
  },
  {
    id: 2,
    title: "Next-Gen AI Breakthrough Set to Transform Industries",
    description:
      "Researchers revealed a major leap in artificial intelligence technology, expected to accelerate progress in healthcare, finance, and other core sectors.",
    image: news2,
  },
  {
    id: 3,
    title: "NASA Prepares Deep-Space Mission to Study Galaxies",
    description:
      "NASA announced an ambitious mission designed to explore faraway galaxies, aiming to uncover new clues about the universe’s early formation.",
    image: news3,
  },
  {
    id: 4,
    title: "Stock Markets Hit New Peaks as Recovery Strengthens",
    description:
      "Global stock exchanges surged to record levels, fueled by steady signs of economic revival after years of post-pandemic challenges.",
    image: news4,
  },
  {
    id: 5,
    title: "Leading Tech Giant Launches Futuristic Smartphone",
    description:
      "A top technology brand has rolled out its latest smartphone, boasting a refreshed design, longer battery life, and advanced performance features.",
    image: news2,
  },
];
const News = () => {
    return (
        <div className='py-16'>
          <h2 className = 'text-3xl font-semibold mb-6'>News</h2>
           <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation = {true}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            
            {
                 news.map((item, index) => (
                    <SwiperSlide key = {index}>
                        <div className = 'flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                            <div className = 'py-4'>
                                <Link to ="/">
                                   <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>
                                    {item.title}
                                    </h3>
                                </Link>
                                <div className='w-12 h-[4px] bg-primary mb-5'></div>
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            </div>
                            <div className = 'flex-shrink-0'>
                                <img src = {item.image} alt="" className='w-full object-cover'/>
                            </div>
                        </div>
                    </SwiperSlide>
                 )) 
            }
        </Swiper>
        </div>
    )
}
export default News ; 