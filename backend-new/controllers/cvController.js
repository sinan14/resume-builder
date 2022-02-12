const Draft = require("../models/Resume");
const Draft = require("../models/Draft");
const factory = require("./handlerFactory");

exports.getDraftById = factory.getOne(Draft);
exports.createResume = factory.createOne(Draft);
exports.getResumeById = factory.getOne(Draft);
exports.updateResume = factory.updateOne(Draft);
exports.deleteResume = factory.deleteOne(Draft);
exports.createDraft = catchAsync(async function (req, res) {
  // let query = Model.findById(req.params.id);
  // if (popOptions) query = query.populate(popOptions);
  const resume = await Draft.findByIdAndDelete(req.params.id);

  if (!resume) {
    return next(new AppError("No document found with that ID", 404));
  }
  const draft = await Draft.create(resume);
  res.status(201).json({
    status: "success",
    data: draft,
  });
});
exports.makeResumeFromDraft = catchAsync(async function (req, res) {
  const draft = await Draft.findByIdAndDelete(req.params.id);
  if (!draft) {
    return next(new AppError("No document found with that ID", 404));
  }
  const resume = await Cv.create(draft);
  res.status(201).json({
    status: "success",
    data: resume,
  });
});
exports.manipulateUrl = function (req, res, next) {
  req.body.Url = req.body.Url.split("v=")[1].substring(0, 11);
  next();
};
exports.selectActive = function (req, res, next) {
  req.query.status = "active";
};
exports.selectInactive = function (req, res, next) {
  req.query.status = "inactive";
};
exports.getResumes = factory.getAll();
