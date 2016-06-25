exports.render = function(req, res) {
  res.render('index', {
    title: 'Mean MVC',
    user: JSON.stringify(req.user)
  });
};
