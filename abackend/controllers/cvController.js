const Resume = require('../models/ResumeModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getResumes = factory.getAll(Resume);
exports.getResumeById = factory.getOne(Resume);
exports.createResume = factory.createOne(Resume);
exports.updateResume = factory.updateOne(Resume);
exports.deleteResume = factory.deleteOne(Resume);
exports.getDraftById = factory.getOne(Resume);

exports.createDraft = catchAsync(async function(req, res, next) {
  // let query = Model.findById(req.params.id);
  // if (popOptions) query = query.populate(popOptions);
  const resume = await Resume.findByIdAndDelete(req.params.id);

  if (!resume) {
    return next(new AppError('No document found with that ID', 404));
  }
  const draft = await Resume.create(resume);
  res.status(201).json({
    status: 'success',
    data: draft
  });
});
exports.makeResumeFromDraft = catchAsync(async function(req, res, next) {
  const draft = await Resume.findByIdAndDelete(req.params.id);
  if (!draft) {
    return next(new AppError('No document found with that ID', 404));
  }
  const resume = await factory.create(draft);
  res.status(201).json({
    status: 'success',
    data: resume
  });
});
exports.manipulateUrl = function(req, res, next) {
  req.body.video = req.body.video.split('v=')[1].substring(0, 11);
  next();
};
//
exports.selectActive = function(req, res, next) {
  req.query.status = 'active';
};
//drafts
exports.selectInactive = function(req, res, next) {
  req.query.status = 'inactive';
};
