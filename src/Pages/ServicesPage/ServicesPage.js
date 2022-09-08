import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FAQ from '../../Components/FAQ/FAQ'
import Services from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import './ServicesPage.css'

const ServicesPage = ({title}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Services />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default ServicesPage