import React from 'react';

import './News.css'

const News = () => {
    return (
        <>
        <div className='news'>
        <div style={{height: '850px'}}>
          <video
            className="background-video"
            muted
            autoPlay
            preload="auto"
            loop
          >
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/labyrinth/agh_header_right.webm"
            />
            <source
              type="video/mp4"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/labyrinth/agh_header_right.mp4"
            />
          </video>
          <div className="fade-background-video">
            <div className="fade-video">
              <div className="background-video-text">
                <img className='news-img' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//labyrinth/agh_logo_plus_bp_russian.png" alt="news" />
              </div>
            </div>
          </div>agh-content-text2
        </div>
        </div>
        <div className='news-content'>
        <div className='news-content-text'>Колдовство мультивселенских масштабов</div>
        <div className='news-content-text2'>Аганим Великий стал Аганимом Множественным! Из-за незначительной оплошности, объединившей мультивселенные, бесполезный Механизм Континуума дал осечку и создал больше великолепных Аганимов, чем может стерпеть одна реальность. Само мироздание того и гляди схлопнется. И, что самое ужасное, сам Аганим — вернее, все Аганимы! — здесь совершенно бессильны.</div>
        </div>
        <div className='agh-content'>
            <div className='agh-content-text'>Уже доступно всем</div>
            <img className='agh-content-img' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//labyrinth/agh_logo_plus_bp_russian.png" alt="aghanim" />
            <div className='agh-content-text2'>Режим игры</div>
            <div className='agh-content-text3'>Под силу ли вам такое колдовство?</div>
            <div className='agh-content-text4'>Аганим попробовал воспользоваться Механизмом Континуума, но вместо этого смешал мультивселенные воедино. Все его хвалёные силы разделились на компанию альтернативных Аганимов, затерянных в Хранилище Контиуума, где никому не известно, какие твари могут ждать за дверью. Ну, почти не известно. Но поговорим об этом позже, когда вы попадёте в Хранилище. Аганим требует, чтобы вы поторопились и спасли всех этих бедных недоколдунов. А сам он сделает так, чтобы вам это воздалось сполна. Всё же придётся биться не на жизнь, а на смерть.</div>
            <div className='agh-content-main'>
            <div className='agh-content-body'>
                <div className='aghnm-content-text'>Исследуйте Хранилище Континуума</div>
                <div className='aghnm-content-text2'>Аганим вызывает группы из четырёх игроков, чтобы они вместе отправились в глубины Хранилища Континуума с бесчисленными измерениями загадок. Соберите группу заранее или дайте системе подбора найти вам товарищей. Боевой пропуск не требуется — Аганиму нужно как можно больше помощников, чтобы одолеть источник древнего, первобытного зла, что находится в Хранилище.</div>
            </div>
            <img className='aganim-image' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//labyrinth/htp_explore.png" alt="aganim" />
            </div>
            <div className='path-content'>
                <img className='path-content-img' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//labyrinth/htp_path.png" alt="asdasd" />
                <div className='path-content-text'>
                    <div className='aghnm-content-text'>Выберите свой путь</div>
                    <div className='aghnm-content-text2'>Аганим не будет говорить вам под руку и пытаться командовать. Ему важна лишь ваша конечная цель — спасение его альтернативной личности — но не ваш путь. Мучительный выбор из необычных новых комнат и событий будет влиять на ваши похождения в Хранилище самыми чудесными и ужасными способами.</div>
                </div>
            </div>
            <div className='path-content'>
                <div className='path-content-text'>
                    <div className='aghnm-content-text'>Выберите свой путь</div>
                    <div className='aghnm-content-text2'>Аганим не будет говорить вам под руку и пытаться командовать. Ему важна лишь ваша конечная цель — спасение его альтернативной личности — но не ваш путь. Мучительный выбор из необычных новых комнат и событий будет влиять на ваши похождения в Хранилище самыми чудесными и ужасными способами.</div>
                </div>
                <img className='path-content-img' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//labyrinth/htp_roster.png" alt="asdasd" />
            </div>
        </div>
        </>
    );
};

export default News;