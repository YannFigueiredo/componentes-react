import './youtube_header.css';
import { FcMenu } from 'react-icons/fc';
import { BiSearch, BiVideoPlus } from 'react-icons/bi';
import { MdOutlineMic } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { CgBell } from 'react-icons/cg';

export default function YoutubeHeader(){
    return(
        <header className="header container">
            <div className='header--navegacao'>
                <FcMenu size={23} color='rgb(50, 50, 50)' className='header--btn-lateral'/>
                <div className='header--logo'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' alt='Logo do site'/>
                </div>
            </div>
            <div className='header--busca'>
                <div className='header--containerbusca'>
                    <input type='search' placeholder='Pesquisar' className='header--campobusca'></input>
                    <BiSearch size={23} color='rgb(50, 50, 50)' className='header--btnbusca'/>
                </div>
                <MdOutlineMic size={25} color='rgb(50, 50, 50)' className='header--buscavoz'/>
            </div>
            <div className='header--opcoes'>
                <BiVideoPlus size={25} color='rgb(50, 50, 50)' className='header--addvideo'/>
                <BsGrid3X3Gap size={25} color='rgb(50, 50, 50)' className='header--grid'/>
                <CgBell size={25} color='rgb(50, 50, 50)' className='header--notificacoes'/>
                <div className='header--fotoperfil'>
                    <img src='https://i1.rgstatic.net/ii/profile.image/1007395044093954-1617193103795_Q512/Yann-Figueiredo.jpg' alt='Foto do perfil'/>
                </div>
            </div>
        </header>
    );
}