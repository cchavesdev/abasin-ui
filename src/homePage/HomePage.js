import React from 'react'
import { Hero } from './Hero';
import { SecondaryHero } from './SecondaryHero';
import { Promo } from './Promo';
import { Events } from './Events';
import { Blog } from './Blog';
import { TertiaryHero } from './TertiaryHero';

export const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <SecondaryHero></SecondaryHero>
            <Promo></Promo>
            <Events></Events>
            <Blog></Blog>
            <TertiaryHero></TertiaryHero>
        </div>
    )
}
