import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainFooter from "../MainFooter/MainFooter"
import "./About.css"

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="about-wrapper" className='container'>
        <h5>About NIR Statistic Webapp</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis voluptas inventore, velit reiciendis laudantium numquam quia saepe magnam odio ducimus veniam natus ipsum. Eligendi suscipit sapiente voluptatibus quo doloremque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis voluptas inventore, velit reiciendis laudantium numquam quia saepe magnam odio ducimus veniam natus ipsum. Eligendi suscipit sapiente voluptatibus quo doloremque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis voluptas inventore, velit reiciendis laudantium numquam quia saepe magnam odio ducimus veniam natus ipsum. Eligendi suscipit sapiente voluptatibus quo doloremque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis voluptas inventore, velit reiciendis laudantium numquam quia saepe magnam odio ducimus veniam natus ipsum. Eligendi suscipit sapiente voluptatibus quo doloremque.</p>
      </div>
      <MainFooter />
    </React.Fragment>
  )
}

export default About