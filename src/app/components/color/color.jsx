'use client';
import React, { useState } from 'react'
import './color.css';
import toast, {Toaster} from 'react-hot-toast';
import { TiTick } from "react-icons/ti";

const Color = () => {
    const handleColorChange = (color, bgcolor) => {
        document.documentElement.style.setProperty('--themeColor', color);
        setIsOpen(false);
        setColor(bgcolor);
        toast(<div className='toastertick'>{bgcolor} theme activated! <TiTick /></div>);
    };

    const handleFontChange = (font, fontname) => {
        document.documentElement.style.setProperty('--themeFont', font);
        setIsOpen(false);
        setTheme(fontname);
        toast(<div className='toastertick'>{fontname} theme activated! <TiTick /></div>);
    }

    const [isopen, setIsOpen] = useState(false);
    const [color, setColor] = useState('rgb(12, 100, 110)');
    const [theme, setTheme] = useState('"Poppins", sans-serif');

    const changetheme = () => {
        setIsOpen(!isopen);
    }

    return (
        <div className='colorPicker'>
            <div className='themes' onClick={changetheme}>THEMES</div>
            {isopen && (
                <div className="colors">
                    <button className='themeheading'>&darr; THEMECOLOR &darr;</button>


                    <button className={color == 'rgb(12, 100, 110)' ? 'active' : ''} onClick={() => handleColorChange('rgb(12, 100, 110)', 'Light Blue')} >Light Blue</button>

                    <button className={color == '#F96167' ? 'active' : ''} onClick={() => handleColorChange('#F96167', 'Light Red')}>Light Red</button>

                    <button className={color == '#375E97' ? 'active' : ''} onClick={() => handleColorChange('#375E97', 'Deep Blue')}>Deep Blue</button>

                    <button className={color == '#73605B' ? 'active' : ''} onClick={() => handleColorChange('#73605B', 'Taupe')}>Taupe</button>


                    <button className='themeheading'>&darr; THEMEFONT &darr;</button>

                    <button className={theme == '"Poppins", sans-serif' ? 'active' : ''} onClick={() => handleFontChange('"Poppins", sans-serif','"Poppins", sans-serif')}>Poppins</button>

                    <button className={theme == "Inconsolata"? 'active' : ''} onClick={() => handleFontChange('"Inconsolata", monospace',"Inconsolata")}>Inconsolata</button>

                    <button className={theme == "Ubuntu Mono" ? 'active' : ''} onClick={() => handleFontChange('"Ubuntu Mono", monospace',"Ubuntu Mono")}>Ubuntu Mono</button>

                    <button className={theme == "Cinzel" ? 'active' : ''} onClick={() => handleFontChange('"Cinzel", serif',"Cinzel")}>Cinzel</button>
                </div>
            )}
            <Toaster/>
        </div>
    )
}

export default Color
