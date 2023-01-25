import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movies } from '../interface';

interface Props {
    netflixOriginals: Movies[]
}

const Banner = ({ netflixOriginals }: Props) => {
    const [movie, setMovie] = useState<Movies | null>()
    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [])

    console.log(movie);
    
    return (
        <section>
            <Image src='' alt='' />
        </section>
    )
} 

export default Banner
