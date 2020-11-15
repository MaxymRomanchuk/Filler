import React from 'react';
import '../custom.css';

class TitlingComponent extends React.Component {
    render() {
        return(
            <div id="bgcustom" className='container-fluid jumbotron bgcustom rounded text-center'>
                <div className='col-lg-6 col-md-8 mx-auto'>
                    <h1>S-Need software</h1>
                    <h3>Everything to satisfy your software needs.</h3>
                    <h4>"Все для задоволення ваших програмних потреб."</h4>
                    <p><a href='/#'>Відвідати сторінку наших контактів</a></p>
                </div>
            </div>
        )
    }
}

export default TitlingComponent;