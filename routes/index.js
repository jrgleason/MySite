
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.aboutMe = function(req, res){
  res.render('aboutMe', { title: 'Express' });
};
