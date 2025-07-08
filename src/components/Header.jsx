import React from 'react'
import '../sass/layout/Header.scss'
import Typed from 'typed.js'

const Header = () => {

    const el = React.useRef(null)

    React.useEffect ( ()=>{
        const typed = new Typed(el.current,{
            strings: ['Dis ', 'Front End Junior'],
            typeSpeed: 200,
            backSpeed: 150,
            loop: true,
            backDelay: 1000,
        });

        return ()=>{
            typed.destroy();
        };
    }, []);

  return (
    <div className='header_container'>
        <h1 className='header_titulo'>  Hola, soy 
            <span className='header_typed' ref={el} />  
        </h1>
      
    </div>
  )
}

export default Header
