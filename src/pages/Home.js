import React from "react";
import Hero from '../components/Hero';
import Achievement from '../components/Achievement';
import Whatcompanyoffers from '../components/Whatcompanyoffers';
import ScaleAndGrow from '../components/scaleandgrow';
import Quality from '../components/quality';
import Test from '../components/test';
import Testimonial from '../components/Tesimonial';
import Favorite from '../components/favoriteapp';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <Achievement />
      <Whatcompanyoffers />
      <Quality />
      <ScaleAndGrow />
      <Test />
      <Favorite />
      <Testimonial />
      
    </div>
  )
}

export default Home;
