import React from 'react';
import Spinner from '@assets/img/spinner.svg';

const Loader: React.FC = () => (
    <div>
        <img src={Spinner} alt="Spinner" className="mr-3"/> Loading ....
    </div>
);

export default Loader;
