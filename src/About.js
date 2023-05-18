import React from 'react';
import { useState } from 'react';

function About() {

    const [click, setCLick] = useState(true)

    function handleClick() {
        setCLick((click) => !click)
    }


    return(
        <div className='about-page'>
            <h1  className='about-header'>About Christopher Nolan</h1>
            <img  src='https://variety.com/wp-content/uploads/2020/12/Christopher_Nolan.png?w=622&h=563&crop=1' className = {click ? 'about-image' : 'spin-image'}/>
            <button onClick = {handleClick} className='button'>Click For a Surprise</button>
            <p className='about-bio'>Christopher Edward Nolan (born 30 July 1970) is a British-American filmmaker. Known for his Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $5 billion worldwide. The recipient of many accolades, he has been nominated for five Academy Awards, five BAFTA Awards and six Golden Globe Awards. In 2015, he was listed as one of the 100 most influential people in the world by Time, and in 2019, he was appointed Commander of the Order of the British Empire for his contributions to film.

Nolan developed an interest in filmmaking from a young age. After studying English literature at University College London, he made several short films before his feature film debut with Following (1998). Nolan gained international recognition with his second film, Memento (2000), for which he was nominated for the Academy Award for Best Original Screenplay. He transitioned from independent to studio filmmaking with Insomnia (2002), and found further critical and commercial success with The Dark Knight Trilogy (2005–2012), The Prestige (2006) and Inception (2010); the last of these earned Nolan two Oscar nominations—Best Picture and Best Original Screenplay. This was followed by Interstellar (2014), Dunkirk (2017) and Tenet (2020). For Dunkirk, he earned two Academy Award nominations, including his first for Best Director.

Nolan's work regularly feature in the listings of best films of their respective decades. They are typically characterised by epistemology and existentialism. Infused with a metaphysical outlook, they explore ethics, the construction of time, and the malleable nature of memory and personal identity. His work is permeated with mathematically inspired images and concepts, unconventional narrative structures, practical special effects, experimental soundscapes, large-format film photography, and materialistic perspectives. He has co-written several of his films with his brother Jonathan, and runs the production company Syncopy Inc. with his wife Emma Thomas.</p>
        </div>
    )
}



export default About