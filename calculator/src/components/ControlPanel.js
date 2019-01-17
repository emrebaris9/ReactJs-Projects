import React, { Component } from 'react'
import {store} from './store';
import Button from './Button'

class ControlPanel extends Component {
    clearDisplay() {    // Ekranı temizler
        store.newExpression = 0;
    }

    removeOneChar() {
        const curExpression = String(store.curExpression);
        const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));
        // Stringe çevirerek sayının uzunluğundan 1 eksilte eksilte sayıyı silme
        return store.newExpression = newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
    }  // sil sil sil silecek bişey kalmayınca sonucu 1 yap

    render() {
        return (
            <section className="buttons--controls">
                <Button buttonClass="control" text="&larr;" clickHandler={this.removeOneChar}/>
                <Button buttonClass="control" text="c" clickHandler={this.clearDisplay}/>
                <Button buttonClass="control" text="&rarr;" />
            </section>
        )
    }
}

export default ControlPanel;