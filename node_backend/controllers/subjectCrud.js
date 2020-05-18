/**
 * Created by kaungkhantthu on 12/6/16.
 */
module.exports = function (Model) {


    var Controller = {};

    Controller.list = function (req, res, next) {
        // Return objs
        // var query = req.query;


        Model.find({}).exec(function (err, objs) {
            if (err) {
                res.statusCode = 500;
                res.json(err);
            } else {
                res.json({data: objs});

            }
        });
    };
    Controller.get = function (req, res, next) {
        // Return objs
        // var query = req.query;
        var major = req.params.major;
        var year = req.params.year;
        var day = {$exists: true};
        var _class = {$exists: true};
        if(!(req.params._class ==  undefined)){ _class = req.params._class;}
        if(!(req.params.day == undefined)){day = req.params.day;}

        console.log(major);
        console.log(year);
        console.log(day);

        Model.find({"major": major, "year": year,
            "timetable.day":day,"_class":_class}).exec(function (err, objs) {
            if (err) {
                res.statusCode = 500;
                res.json(err);
            } else {

                res.json({data: objs});

            }
        });
    };

    Controller.create = function (req, res, next) {

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
    Controller.remove = function (req, res, next) {
        // Delete a obj
        var id = req.params.id;
        var body = req.body;


        Model.findByIdAndRemove(id,function (err, obj) {
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