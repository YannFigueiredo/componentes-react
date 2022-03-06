import './slide_amazon.css';
import { useState } from 'react';
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

    return(
        <section className='container-topo-amazon'>
            <div className='slide-amazon'>
                <div className='area-slide'>
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