import './disneyplus_cards.css';
import { useState } from 'react';
import disney_bg from '../../assets/img/disneyplus_cards/disney_bg.png';
import disney_intro from '../../assets/video/disneyplus_cards/disney_intro.mp4';
import marvel_bg from '../../assets/img/disneyplus_cards/marvel_bg.png';
import marvel_intro from '../../assets/video/disneyplus_cards/marvel_intro.mp4';
import nationalgeo_bg from '../../assets/img/disneyplus_cards/nationalgeo_bg.png';
import nationalgeo_intro from '../../assets/video/disneyplus_cards/nationalgeo_intro.mp4';
import pixar_bg from '../../assets/img/disneyplus_cards/pixar_bg.png';
import pixar_intro from '../../assets/video/disneyplus_cards/pixar_intro.mp4';
import starwars_bg from '../../assets/img/disneyplus_cards/starwars_bg.png';
import starwars_intro from '../../assets/video/disneyplus_cards/starwars_intro.mp4';

export default function DisneyPlusCards(){
    const [ cards, setCards ] = useState([
        {nome: 'Card da Disney', bg: disney_bg, intro: disney_intro},
        {nome: 'Card da Pixar', bg: pixar_bg, intro: pixar_intro},
        {nome: 'Card da Marvel', bg: marvel_bg, intro: marvel_intro},
        {nome: 'Card do Star Wars', bg: starwars_bg, intro: starwars_intro},
        {nome: 'Card da National Geographic', bg: nationalgeo_bg, intro: nationalgeo_intro}
    ]);
    
    return(
        <section className='cards'>
            {cards.map((card, key) => (
                <article className='card' key={key}>
                    <img src={card.bg} alt={card.nome}/>
                </article>
            ))}
        </section>
    );
}