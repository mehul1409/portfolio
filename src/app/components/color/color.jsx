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
    const [color, setColor] = useState('default');
    const [theme, setTheme] = useState('poppins');

    const changetheme = () => {
        setIsOpen(!isopen);
    }

    return (
        <div className='colorPicker'>
            <div className='themes' onClick={changetheme}>THEMES</div>
            {isopen && (
                <div className="colors">
                    <button className='themeheading'>&darr; THEMECOLOR &darr;</button>

                    <button className={color == 'Default' ? 'active' : ''} onClick={() => handleColorChange('rgb(12, 100, 110)', 'Default')} >Default</button>
                    <button className={color == 'Red' ? 'active' : ''} onClick={() => handleColorChange('red', 'Red')}>Red</button>
                    <button className={color == 'Yellow' ? 'active' : ''} onClick={() => handleColorChange('yellow', 'Yellow')}>Yellow</button>

                    <button className='themeheading'>&darr; THEMEFONT &darr;</button>

                    <button className={theme == 'Poppins' ? 'active' : ''} onClick={() => handleFontChange('"Poppins", sans-serif','Poppins')}>Poppins</button>
                    <button className={theme == 'Inconsolata' ? 'active' : ''} onClick={() => handleFontChange('"Inconsolata", monospace','Inconsolata')}>Inconsolata</button>
                    <button className={theme == 'Ubuntu' ? 'active' : ''} onClick={() => handleFontChange('"Ubuntu Mono", monospace','Ubuntu')}>Ubuntu Mono</button>
                    <button className={theme == 'Cinzel' ? 'active' : ''} onClick={() => handleFontChange('"Cinzel", serif','Cinzel')}>Cinzel</button>
                </div>
            )}
            <Toaster/>
        </div>
    )
}

export default Color
