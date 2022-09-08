import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Proyects from '../../Components/Proyects/Proyects'
import './ProyectsPage.css'

const ProyectsPage = ({ title }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Proyects />
    </>
  )
}

export default ProyectsPage