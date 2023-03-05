import React from 'react'

const CName = 'Digital Dialogue Hackathon';

const instagram = "https://www.instagram.com/p/CpN9ST4Nbzp/?utm_source=ig_web_copy_link";
const facebook = "https://www.facebook.com/100080304501876/posts/207418115278337/";
const maps = "https://goo.gl/maps/qCqsByHEyFdweZyV8";
const diaz = "#";



export default function Footer() {
  return (
    <div className="footer-dark">
        <footer>
            <div className="bscontainer">
                <div className="bsrow">
                   <div className="bscol-md-2 item">
                      <h3>Pages</h3>
                      <ul>
                         <li><a href={diaz}>Home</a></li>
                         <li><a href={diaz}>page</a></li>
                         <li><a href={diaz}>Login</a></li>
                         <li><a href={diaz}>Diaz</a></li>
                      </ul>
                   </div>
                   <div className="bscol-md-2 item">
                      <h3>Know More</h3>
                      <ul>
                         <li><a href={diaz}>Membership</a></li>
                         <li><a href={diaz}>Our Team</a></li>
                         <li><a href={diaz}>News</a></li>
                      </ul>
                   </div>
                   <div className="bscol-md-2 item">
                      <h3>Other Details</h3>
                      <ul>
                         <li><a href={diaz}>Privacy Policy</a></li>
                         <li><a href={diaz}>Terms of Service</a></li>
                      </ul>
                   </div>
                   <div className="bscol-md-6 item text">
                      <h3>{CName}</h3>
                      <p>Rana ghi nseyou matnkhal3ouch <br/>hada site ghadi nerbho bih nchalh hehe, good luck :)</p>
                   </div>
            
                </div>
                <div className="social_links">
                    <a href={instagram} target="_blank" rel="noreferrer">
                    <span className="fa-stack fa-lg ig combo">
                       <i className="fa fa-circle fa-stack-2x circle"></i>
                       <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
                    </span>
                    </a>
                    <a href={facebook} target="_blank" rel="noreferrer">
                    <span className="fa-stack fa-lg fb combo">
                       <i className="fa fa-circle fa-stack-2x circle"></i>
                       <i className="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
                    </span>
                    </a>
                    <a href={maps} target="_blank" rel="noreferrer">
                    <span className="fa-stack fa-lg yt combo">
                       <i className="fa fa-circle fa-stack-2x circle"></i>
                       <i className="fa fa-map-marker fa-stack-1x fa-inverse icon"></i>
                    </span>
                    </a>
                </div>
                <p className="copyright">{CName} © 2023</p>
            </div>
        </footer>
    </div>
  )
}
