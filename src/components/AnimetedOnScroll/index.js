import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedOnScroll = ({ children, animation, duration = 1800 }) => {
  useEffect(() => {
    AOS.init({ duration });
  }, [duration]);

  return (
    <div data-aos={animation}>
      {children}
    </div>
  );
};

export default AnimatedOnScroll;