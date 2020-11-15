import React from 'react';
import '../custom.css';

class ContactsComponent extends React.Component {
    render () {
        return (
            <main role="main" className="container-fluid">
                <div id="bgcontacts" className='container-fluid jumbotron bgcustom rounded text-center'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h1>Наші контакти</h1>
                        <h4>"Все для задоволення ваших програмних потреб."</h4>
                    </div>
                </div>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4'>
                            <h3><strong>Гаряча лінія:</strong></h3>
                        </div>
                        <div className='col-sm-6 col-md-8'>
                            <h5>Мобільний: +08005553535 (цілодобово)<br /></h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4'>
                            <h3><strong>Головний офіс:</strong></h3>
                        </div>
                        <div className='col-sm-6 col-md-8'>
                            <h5>м.Київ, вул.Академіка Пупкіна 47 корп.4. <br />
                            Мобільний: +08005553535 (щоденно 10:00-18:00)</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4'>
                            <h3><strong>Data center:</strong></h3>
                        </div>
                        <div className='col-sm-6 col-md-8'>
                            <h5>м.Харків, вул.Героїв УПА 1337 <br />
                            Мобільний: +08003335353 (щоденно 10:00-18:00)</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4'>
                            <h3><strong>Call center:</strong></h3>
                        </div>
                        <div className='col-sm-6 col-md-8'>
                            <h5>м.Ужгород, вул.Польова 245 <br />
                            Мобільний: +08005553535 (щоденно 6:00-13:00)</h5>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ContactsComponent;