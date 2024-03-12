import React, { useRef } from 'react'
import CustomHook from './CustomHook'
function Home() {
  const scrollTab = useRef()
  CustomHook(scrollTab)

  return (
    <section ref={scrollTab} className='acasa' id='acasa'>
      <div className='content'>
        <div className='name'>
          NOI SUNTEM <span>BYTEDEVS</span>
        </div>
        <div className='des'>
          {/* 30 */}
          Căutați să vă îmbunătățiți prezența online? Alegeți ByteDevs pentru
          soluții de dezvoltare web de vârf. Echipa noastră creează site-uri web
          personalizate, cu un accent deosebit pe inovație și experiența
          utilizatorului. Cu designuri elegante și funcționalitate impecabilă,
          ByteDevs vă ajută să vă evidențiați în peisajul digital și să vă
          maximizați conversiile. Alegeți ByteDevs pentru a vă transforma
          viziunea în realitate!
        </div>

        <a
          href='/democv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='animation active '
        >
          Download My CV
        </a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src='/myAvatar.jpg' alt='' />
          <div className='info'>
            <div>Web Developer</div>
            <div>ByteDevs</div>
            <div>03/12</div>
            <div>Razvan</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
