import VimeoPlayer from '@vimeo/player';
import LodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
