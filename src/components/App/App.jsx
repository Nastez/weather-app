import React from 'react';
import s from './App.module.css'
import CurrentTempContainer from "../CurrentTemp/CurrentTempContainer";

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <CurrentTempContainer />
        </div>
    )
}

export default App;