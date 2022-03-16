import './disneyplus_cards.css';
import { useState, useRef, useEffect } from 'react';
import disney_bg from '../../assets/img/disneyplus_cards/disney_bg.png';
import disney_intro_mp4 from '../../assets/video/disneyplus_cards/disney_intro.mp4';
import disney_intro_webm from '../../assets/video/disneyplus_cards/disney_intro.webm';
import marvel_bg from '../../assets/img/disneyplus_cards/marvel_bg.png';
import marvel_intro_mp4 from '../../assets/video/disneyplus_cards/marvel_intro.mp4';
import marvel_intro_webm from '../../assets/video/disneyplus_cards/marvel_intro.webm';
import nationalgeo_bg from '../../assets/img/disneyplus_cards/nationalgeo_bg.png';
import nationalgeo_intro_mp4 from '../../assets/video/disneyplus_cards/nationalgeo_intro.mp4';
import nationalgeo_intro_webm from '../../assets/video/disneyplus_cards/nationalgeo_intro.webm';
import pixar_bg from '../../assets/img/disneyplus_cards/pixar_bg.png';
import pixar_intro_mp4 from '../../assets/video/disneyplus_cards/pixar_intro.mp4';
import pixar_intro_webm from '../../assets/video/disneyplus_cards/pixar_intro.webm';
import starwars_bg from '../../assets/img/disneyplus_cards/starwars_bg.png';
import starwars_intro_mp4 from '../../assets/video/disneyplus_cards/starwars_intro.mp4';
import starwars_intro_webm from '../../assets/video/disneyplus_cards/starwars_intro.webm';

export default function DisneyPlusCards(){
    const [ cards, setCards ] = useState([
        {nome: 'Card da Disney', bg: disney_bg, intro_mp4: disney_intro_mp4, intro_webm: disney_intro_webm},
        {nome: 'Card da Pixar', bg: pixar_bg, intro_mp4: pixar_intro_mp4, intro_webm: pixar_intro_webm},
        {nome: 'Card da Marvel', bg: marvel_bg, intro_mp4: marvel_intro_mp4, intro_webm: marvel_intro_webm},
        {nome: 'Card do Star Wars', bg: starwars_bg, intro_mp4: starwars_intro_mp4, intro_webm: starwars_intro_webm},
        {nome: 'Card da National Geographic', bg: nationalgeo_bg, intro_mp4: nationalgeo_intro_mp4, intro_webm: nationalgeo_intro_webm}
    ]);

    return(
        <section className='cards'>
            {cards.map((card, key) => (
                <article className='card' key={key}>
                    <img src={card.bg} alt={card.nome}/>
                    <video src={card.intro_mp4, card.intro_webm} className='card--video-intro' autoPlay={true} loop muted></video>
                </article>
            ))}
        </section>
    );
}