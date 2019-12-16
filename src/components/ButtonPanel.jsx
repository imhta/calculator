import React from 'react';
import './ButtonPanel.scss';
import Button from './Button';

function ButtonPanel() {
    return (
        <section>
            <div className="row">
                <Button name='AC'/>
                <Button name='+/-'/>
                <Button name='%'/>
                <Button name='÷'/>
            </div>
            <div className="row">
                <Button name='7'/>
                <Button name='8'/>
                <Button name='9'/>
                <Button name='X'/>
            </div>
            <div className="row">
                <Button name='4'/>
                <Button name='5'/>
                <Button name='6'/>
                <Button name='-'/>
            </div>
            <div className="row">
                <Button name='1'/>
                <Button name='2'/>
                <Button name='3'/>
                <Button name='+'/>
            </div>
            <div className="row">
                <Button name='0'/>
                <Button name='.'/>
                <Button name='='/>
            </div>

        </section>
    );
}

export default ButtonPanel;