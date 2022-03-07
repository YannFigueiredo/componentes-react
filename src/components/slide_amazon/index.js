import './slide_amazon.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState, useRef } from 'react';
import banner1 from '../../assets/img/slide_amazon/1.jpg';
import banner2 from '../../assets/img/slide_amazon/2.jpg';
import banner3 from '../../assets/img/slide_amazon/3.png';
import banner4 from '../../assets/img/slide_amazon/4.jpg';
import banner5 from '../../assets/img/slide_amazon/5.jpg';
import banner6 from '../../assets/img/slide_amazon/6.jpg';

export default function SlideAmazon(){
    const [ banners, setBanners ] = useState([
        {nome: 'Banner de slide 1', url: banner1},
        {nome: 'Banner de slide 2', url: banner2},
        {nome: 'Banner de slide 3', url: banner3},
        {nome: 'Banner de slide 4', url: banner4},
        {nome: 'Banner de slide 5', url: banner5},
        {nome: 'Banner de slide 6', url: banner6}
    ]);

    let deslocamento = 0;

    const btnAnterior = useRef(null);
    const btnProximo = useRef(null);
    const areaSlide = useRef(null);

    const voltarSlide = (e) => {
        e.preventDefault();

        btnAnterior.current.classList.add('btn-slide--destacado');
        btnProximo.current.classList.remove('btn-slide--destacado');

        if(deslocamento + areaSlide.current.clientWidth > 0){
            deslocamento = ((banners.length - 1) * areaSlide.current.clientWidth) * -1;
        }else{
            deslocamento = deslocamento + areaSlide.current.clientWidth;
        }     

        areaSlide.current.style.marginLeft = deslocamento + 'px';
    };
    
    const avancarSlide = (e) => {
        e.preventDefault();

        btnProximo.current.classList.add('btn-slide--destacado');
        btnAnterior.current.classList.remove('btn-slide--destacado');

        if(deslocamento - areaSlide.current.clientWidth === (banners.length * areaSlide.current.clientWidth)*-1){
            deslocamento = 0;
        }else{
            deslocamento = deslocamento - areaSlide.current.clientWidth;
        }

        areaSlide.current.style.marginLeft = deslocamento + 'px';
    };

    return(
        <section className='container-topo-amazon'>
            <div className='slide-amazon'>
                <div className='btn-slide btn-slide--anterior' ref={btnAnterior} onClick={voltarSlide}>
                    <MdOutlineArrowBackIos/>
                </div>
                <div className='btn-slide btn-slide--proximo' ref={btnProximo} onClick={avancarSlide}>
                    <MdOutlineArrowForwardIos/>
                </div>
                <div className='area-slide' ref={areaSlide}>
                    {
                        banners.map((banner, key) => (
                            <img src={banner.url} alt={banner.nome} key={key}/>
                        ))
                    }
                </div>
            </div>
            <div className='destaques'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        </section>
    );
}