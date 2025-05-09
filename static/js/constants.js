/**
 * Application Constants
 *
 * This file contains all the constant values used throughout the application.
 */

// Caption lines for different stages of the application
export const LINES = [
  'Touch the images that spark the most curiosity in you.',
  'Next, please enter your legal name. You may re-use your existing name.',
  'Thanks [name].',
  'You\'ve opted into the alpha release.',
  'We will be using the flight trajectories of these birds.',
  'Standard process is letting the mycelium work with your remains.',
  'The interactions model the sparks between the neurons, but research shows migration patterns may be an improvement.',
  '[name], which one does your intuition say is yours?',
  'Please call back to them.',
  'Breathe in, breathe out (malayalam buddhism meditation exercise)',
  'Eat the honey from the bees to moderate your state.',
  'This current state has been saved.',
  'We have targeted this flock and blown them 0.3 degrees southeast',
  'Other adjustments to the ecosystem include an increase of soil acidity by 0.03% and diversifying the bacteria in their resting grounds.',
  'Their state is now equivalent to yours.',
  '[name] will live on at [latlong (link to the google maps view)].',
  'The sun is rising. Exit the machine',
];

// Poetry lines for the collage
export const POETRY = [
  '"my arms, when visible now, are foreceps of incisive metal"',
  '"as alive as coral beneath the surface of oceanwater"',
  '"[it] quivers, its meaning quivers as if a mirage"',
  '"the spores that dance like my hair does"',
  '"the moonrise coincides with my claim to this spacetime"',
  '"the light of your eyes waver when i ask"',
  '"i feel the waves and tendrils of love"',
  '"waves eagerly lapping"',
  '"knowledge hadn\'t permeated through the rest of the body yet"',
];

// Define collage images
export const COLLAGE_IMAGES = [
  { src: '/static/images/corpse.jpg', width: '600px' },
  { src: '/static/images/worm.jpg', width: '600px' },
  { src: '/static/images/clock.webp', width: '600px' },
  { src: '/static/images/lighter.jpg', width: '600px' },
  { src: '/static/images/tree.jpg', width: '600px' },
  { src: '/static/images/abstract.jpg', width: '600px' },
  { src: '/static/images/sparkle.jpg', width: '600px' },
  { src: '/static/images/sheep.jpg', width: '600px' },
  { src: '/static/images/crab.jpg', width: '600px' },
  { src: '/static/images/egg.jpg', width: '600px' },
  { src: '/static/images/platypus.jpg', width: '600px' },
  { src: '/static/images/lightning.jpg', width: '600px' },
  { src: '/static/images/bat.jpg', width: '600px' },
  { src: '/static/images/mushroom.jpg', width: '600px' },
  { src: '/static/images/water.jpg', width: '600px' },
  { src: '/static/images/color.jpg', width: '600px' },
  { src: '/static/images/micro.jpg', width: '600px' },
  { src: '/static/images/retrograde.jpg', width: '600px' },
  { src: '/static/images/hummingbird.jpg', width: '600px' },
  { src: '/static/images/calf.jpg', width: '600px' },
  { src: '/static/images/fungi.jpg', width: '600px' },
  { src: '/static/images/dog.jpg', width: '600px' },
  { src: '/static/images/dune.jpg', width: '600px' },
];

// Animation timing constants
export const ANIMATION_TIMING = {
  CANVAS_FADE_OUT_DELAY: 4000,
  CANVAS_FADE_OUT_DURATION: 1000,
  COLLAGE_FADE_IN_DELAY: 1000,
  COLLAGE_FADE_OUT_DELAY: 3000,
  FORM_DELAY: 5000,
};

// Canvas configuration
export const CANVAS_CONFIG = {
  width: 800,
  height: 800,
  backgroundColor: 'transparent',
};
