import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <img className="footer__img" src="pets.svg" alt="" aria-hidden='true' />}
      <footer className="footer">
        <p>Developed by <a href="/#" target='_blank' rel="noreferrer">Gautam Kumar Jha</a>.</p>
      </footer>
    </>
  );
};

export default Footer;