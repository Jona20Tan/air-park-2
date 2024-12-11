import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sparkles } from 'lucide-react';
import { Container } from './layout/Container';

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const text = "BOUNCE-TASTIC ADVENTURE!";

  const createArcText = () => {
    return text.split('').map((char, i) => {
      const radius = window.innerWidth < 758 ? 250 : 250; // Increased radius for better spacing
      const angleSpread = 147; // Degrees for the semi-circle
      const startAngle = -180; // Start from left side
      const angleStep = angleSpread / (text.length -6);
      const currentAngle = startAngle + (i * angleStep);
      const radian = (currentAngle * Math.PI) / 180;
      
      // Calculate position on the arc
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      const letterSpacing = '0em'; // Increased letter spacing

      return (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px - 0.5em)`,
            top: `${y + radius + 20}px`,
            transform: `rotate(${currentAngle + 90}deg)`,
            display: 'inline-block',
            transformOrigin: 'center',
            letterSpacing,
            transition: 'transform 0.3s ease',
            fontSize: window.innerWidth < 750 ? '3.75rem' : '3.5rem'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-orange-400 -z-10" />
      <Container className="py-8">
        <section className="text-center mb-24">
          <h1 className="font-bold text-white relative">
            <div className="arc-text relative" style={{ height: window.innerWidth < 768 ? '300px' : '400px' }}>
              <div className='-mt-2'>
                {createArcText()}
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-10%]">
                <div className="w-64 h-64 md:w-68 md:h-68 animate-bounce flex items-center justify-center">
                  {/* <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-purple-600" /> */}
                  <img src="/airpark-logo.png"></img>
                </div>
                <div className="absolute -right-8 md:-right-16 top-1/2 bg-blue-500 text-white p-2 md:p-4 rounded-full rotate-12">
                  <p className="font-bold text-sm md:text-base">TICKETS<br/>ON<br/>SALE!</p>
                </div>
              </div>
            </div>
          </h1>
        </section>

        <section className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-white">
            Bouncing Moments
          </h2>
          <Slider {...settings}>
            <div>
              <img src="/photo1.jpg"></img>
            </div>
            <div>
              <img src="/photo2.png"></img>
            </div>
            <div>
              <img src="/photo3.png"></img>
            </div>
            <div>
              <img src="/photo4.png"></img>
            </div>
            <div>
              <img src="/photo5.png"></img>
            </div>
            <div>
              <img src="/photo6.png"></img>
            </div>
          </Slider>
          <p className="text-center max-w-2xl mx-auto mt-6 md:mt-8 text-mphoto md:text-base pt-5 text-white/90">
            Experience the thrill and excitement of our world-class attractions
          </p>
        </section>
      </Container>
    </div>
  );
}