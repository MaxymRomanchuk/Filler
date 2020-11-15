import React from 'react';
import diag1 from '../diagram1.png';
import diag2 from '../diagram2.png';
import diag3 from '../diagram3.png';

class SwirlComponent extends React.Component {
    render () {
        return (
            <div className='container row mx-auto text-center'>
                <div className='rounded col-md-6 col-lg-4'>
                    <p><img src={diag1} className='img-fluid' alt='Diagram' ></img></p>
                    <h3>Комплексні рішення</h3>
                    <p>Наші послуги охоплюють великий спектр сфер. Таким чином вам не слід турбуватися за деталі - залиште це нам.</p>
                </div>
                <div className='rounded col-md-6 col-lg-4'>
                    <p><img src={diag2} className='img-fluid' alt='Diagram'></img></p>
                    <h3>20% ринку, 80% перспектив.</h3>
                    <p>Наші послуги активно застосовуються в багатьох великих компаніях. 
                        Наша компанія входить в топ-741 копманій, але щороку підіймається в рейтингу та збільшує свою клієнтську базу.</p>
                </div>
                <div className='rounded col-md-6 col-lg-4'>
                    <p><img src={diag3} alt='Diagram'></img></p>
                    <h3>Свобода поглядів та дружній колектив</h3>
                    <p>Ми виконуємо свою роботу від початку та до бажаного клієнтом кінцевого стану, але цінуємо думку кожного працівника.
                         Саме тому за проханням нашого дизайнера ця діаграма розділена на 3 сектори різного кольору.
                    </p>
                </div>
            </div>
        )
    }
}

export default SwirlComponent;