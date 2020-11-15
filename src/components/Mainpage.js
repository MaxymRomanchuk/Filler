import React from 'react';
import TitlingComponent from './Titling';
import SwirlComponent from './Swirl';

class MainpageComponent extends React.Component {
    render() {
        return (
            <main role="main" className="container-fluid">
                <TitlingComponent />
                <SwirlComponent />
            </main>
        )
    }
}

export default MainpageComponent;