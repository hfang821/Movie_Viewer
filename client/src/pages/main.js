import React, { useState } from 'react';
import { getMovies, createMovie, updateMovie, deleteMovie} from '../utils/API';
import Nav from '../components/NavBar';
import Content from '../components/Content';

export default function Main() {

    return (
        <section className="main">
            <Nav />
            <Content />
        </section>

    )
}
 