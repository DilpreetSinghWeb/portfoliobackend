import "./hero.css";
import profilePic from "../../images/02.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero banner" id="hero">
        <div className="hero_container">
          <div className="hero_container_content">
            <h2>Hi, I'm <span style={{backgroundColor:"rgb(254, 56, 56,.3)", padding:"8px 12px",borderRadius:"7px"}}>Dilpreet Singh</span> </h2>
            <h3>I'm a Web Developer | Web Designer</h3>
            <p style={{fontWeight:"500"}}>
            I create stunning websites, achieving exceptional quality through continuous practice and learning.
            </p>
          </div>
          <div className="hero_container_img">
            <img src={profilePic} alt="Profile_Picture" />
          </div>
        </div>
        <div className="hero_wave">
          {/* <svg className="hero_wave_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,197.3C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg> */}
          <svg
            className="hero_wave_img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,160L80,186.7C160,213,320,267,480,277.3C640,288,800,256,960,245.3C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
