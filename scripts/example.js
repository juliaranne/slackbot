var images = [ "http://images.wikia.com/pt.starwars/images/c/c4/Yoda2.jpg",  "http://images.wikia.com/es.starwars/images/4/45/Yoda.jpg", "http://img.lum.dolimg.com/v1/images/ep3_ia_89377_r_bb46f7c6.jpeg", "http://vignette2.wikia.nocookie.net/starwars/images/1/14/Air_yoda.jpg/revision/latest", "http://screencrush.com/442/files/2014/12/yoda-back.jpg", "http://cdn.pcwallart.com/images/yoda-wallpaper-1920x1080-wallpaper-4.jpg" ];


module.exports = function(robot) {
  return robot.hear(/^yoda pic$/i, function(msg) {
    return msg.send(msg.random(images));
  });
};

