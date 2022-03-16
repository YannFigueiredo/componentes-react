import './youtube_lateral.css';
import { AiFillHome, AiOutlineLike } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineVideoLibrary, MdKeyboardArrowDown } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import { useState, useEffect, useRef } from 'react';

export default function YoutubeLateral(){
    const [ expandirMenu, setExpandirMenu ] = useState(false);

    const txtItemMenu = useRef(null);

    function verificarTamanhoTxt(){
        let itemMenu = document.querySelectorAll('.lateral--menu li span');
        let limiteChar = 20;
        
        for(let i = 0; i < itemMenu.length; i++){
            if(itemMenu[i].textContent.length > limiteChar)
                itemMenu[i].textContent = itemMenu[i].textContent.slice(0, limiteChar - 1).trim() + '...';
        }
    }

    useEffect(() => {
        verificarTamanhoTxt();
    }, []);

    useEffect(() => {
        verificarTamanhoTxt();
    }, [expandirMenu]);

    return(
        <section className='lateral'>
            <nav className='lateral--nav'>
                <ul className='lateral--menu'>
                    <a>
                        <li title='Home'>
                            <AiFillHome size={20} color='#000'/>
                            <span ref={txtItemMenu}>Home</span>
                        </li>
                    </a>
                    <a>
                        <li title='Explorar'>
                            <MdOutlineExplore size={20} color='#000'/>
                            <span>Explorar</span>
                        </li>
                    </a>
                    <a>
                        <li title='Biblioteca'>
                            <MdOutlineVideoLibrary size={20} color='#000'/>
                            <span>Biblioteca</span>
                        </li>
                    </a>
                    {expandirMenu &&
                        <a>
                            <li title='Histórico'>
                                <VscHistory size={20} color='#000'/>
                                <span>Histórico</span>
                            </li>
                        </a>
                    }
                    {expandirMenu &&
                        <a>
                            <li title='Vídeos marcados com "Gostei"'>
                                <AiOutlineLike size={20} color='#000'/>
                                <span>Vídeos marcados com "Gostei"</span>
                            </li>
                        </a>
                    }
                </ul>
            </nav>
            {expandirMenu === false &&
                <div title='Mostrar mais' className='lateral--btn-vermais'>
                    <MdKeyboardArrowDown size={20} color='#000'/>
                    <span onClick={() => {setExpandirMenu(true)}}>Mostrar mais</span>
                </div>
            }
        </section>
    );
}