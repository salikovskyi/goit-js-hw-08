const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const onPlay = function(data) {  
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};


player.on('timeupdate', throttle(onPlay, 1000));

const saveSet = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(saveSet);
console.log(parsedSettings);

player.setCurrentTime(parsedSettings).then(function (seconds) {
  
    if (saveTime !== null) {
        player.setCurrentTime(saveTime);
          console.log(seconds);
}
});


