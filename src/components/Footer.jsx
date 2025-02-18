// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img 
          src="https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/480242834_122116823708660459_5103820012870151209_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFAyHBqWuCJKPHSB6aJBLtJoKsuu9J1Fu2gqy670nUW7ebTqP9vgERBf3hmusp1XG_DjW_LIXH1ffTpXQ4aVYLD&_nc_ohc=idjMpJiOmTEQ7kNvgH3j7m5&_nc_oc=Adj4KezYZrfHiIqGc36O7LqC9UojAbR87HZu1KTYPos2gRHZOsrHJ6LXZrW38uDaIMzZ2CV8qK9H3aXsjVtsID_c&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AzLKXtOc-y_ggOqguwXwf2r&oh=00_AYCZh7DlQDBTiT-o2cudwa6RBpcRzkh_nuuTAzOClgHSQQ&oe=67BABB38"
          alt="Logo" className="footer-logo" />
        <p>📍 Pasto, Agualongo | Cra 20 sur #3 bis Cs 18</p>
        <a href="facebook_url" target="_blank" rel="noopener noreferrer" className="facebook-btn">🌐 Visítanos en Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;