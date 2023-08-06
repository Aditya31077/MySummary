import {logos} from '../assets/';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logos} alt="mysummary_logo"
            className="w-28 object-contain" />

            <button type='button' onClick={()=>window.open('https://github.com/Aditya31077/MySummary')}
                className="black_btn"
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
            Summarized URLs by <br className="max-md:hidden"/>
            <span className='blue_gradient'>OpenAI GPT-4</span>

        </h1>
        <h2 className='desc'>
            Summarize your links,articles or speech using this app for faster knowlede gain, you don't need prompting anymore...
        </h2>
    </header>
  )
}

export default Hero