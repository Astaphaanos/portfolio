
import './TypingEffect.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const TypingEffect = () => {

    const [text] = useTypewriter({
        words : ['Desenvolvedora Front-End'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className='typing-container'>
            <h2 style={{color: '#237BF7'}}>
                {text}
                <span style={{color: 'white'}}>
                    <Cursor cursorStyle='|' />
                </span>
            </h2>
        </div>
    )
}

export default TypingEffect;