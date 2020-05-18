/**
 * Created by kaungkhantthu on 11/18/16.
 */
module.exports = function (Model) {
    var Controller = {};

    Controller.list = function (req, res, next) {
        // Return objs
        // var query = req.query;
        var limit =req.query.limit;
        var skip = req.query.skip;
        console.log(limit);
        Model.find({},null,
            {sort: {publishedDate: -1}}).skip(skip).exec(function (err, objs) {

            res.json({data: objs});
        });
    };

    Controller.get = function (req, res, next) {
        // Return a obj

        Model.findById(req.params.id, function (err, obj) {
            if (!obj) {
                res.status(404);
                res.json({
                    success: false,
                    message: "Model not found"
                });
                next();
            } else {
                res.json({data: obj});
            }
        });

        Model.findPersonByName(req.param.name, function (err, obj) {
            if (!obj) {
                res.status(404);
                res.json({
                    success: false,
                    message: "Model not found"
                });

            } else {
                res.json({data: obj});
            }
        });

    };

    Controller.create = function (req, res, next) {
        // Create a obj and return them
        var body = req.body;

        var obj = new Model(body);

        obj.save(function (err, savedModel) {
            if (err) {
                res.status(500);
                return res.json({
                    success: false,
                    message: err.message,
                    err: err
                });
            }
            res.json(savedModel);
        });
    };

    Controller.update = function (req, res, next) {
        // Update a obj
        var id = req.params.id;
        var body = req.body;
        Model.findByIdAndUpdate(id, body, {new: true}, function (err, obj) {
            if (err || !obj) {
                res.status(400);
                return res.json({
                    success: false,
                    message: "Sorry, id not found!"
                });
            }
            res.json(obj);
        });

    };

    Controller.remove = function (req, res, next) {
        // Delete a obj
        var id = req.params.id;
        var body = req.body;


        Model.findByIdAndUpdate(id, body, {new: true}, function (err, obj) {
            if (err || !obj) {
                res.status(400);
                return res.json({
                    success: false,
                    message: "Sorry, id not found!"
                });
            }
            res.json(obj);
        });
    };



    return Controller;
};
