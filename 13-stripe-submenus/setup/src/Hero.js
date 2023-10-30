import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className="hero-center">
      {/* Hero Info */}
      <article className='hero-info'>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quis pariatur debitis blanditiis?
          Earum, maxime. Blanditiis repellendus iusto modi aut?
        </p>
        <button className='btn'>Start Now</button>
      </article>

      {/* Phone Image */}
      <article className='hero-images'>
        <img src={phoneImg} alt="phone" className='phone-img' />
      </article>
    </div>
  </section>
}

export default Hero
