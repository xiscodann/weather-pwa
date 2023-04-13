import React from 'react';
import Clear from '../Clear';
import FewClouds from '../FewClouds';
import ScatteredCloud from '../ScatteredCloud';
import BrokenClouds from '../BrokenClouds';
import ShowerRain from '../ShowerRain';
import Rain from '../Rain';
import Thunderstorm from '../Thunderstorm';
import Snow from '../Snow';
import Mist from '../Mist';

const AnimatedIcon = ({ icon }) => {
  if (icon?.includes('01')) return <Clear />;
  if (icon?.includes('02')) return <FewClouds />;
  if (icon?.includes('03')) return <ScatteredCloud />;
  if (icon?.includes('04')) return <BrokenClouds />;
  if (icon?.includes('09')) return <ShowerRain />;
  if (icon?.includes('10')) return <Rain />;
  if (icon?.includes('11')) return <Thunderstorm />;
  if (icon?.includes('13')) return <Snow />;
  if (icon?.includes('50')) return <Mist />;
};

export default AnimatedIcon;
