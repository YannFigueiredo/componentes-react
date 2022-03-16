import './youtube_home.css';
import YoutubeHeader from './YoutubeHeader';
import YoutubeLateral from './YoutubeLateral';

export default function YoutubeHome(){
    return(
        <div className="home">
            <YoutubeHeader/>
            <div className="home--main">
                <YoutubeLateral/>
                <div className="home--conteudo">
                    <h1>Aqui ficam os vídeos!</h1>
                </div>
            </div>
        </div>
    );
} 