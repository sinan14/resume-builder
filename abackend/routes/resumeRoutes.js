const express = require('express');
const resumeController = require('../controllers/cvController');
const multerController = require('../controllers/multerController');

const router = express.Router();

router
  .route('/')
  .get(resumeController.getResumes)
  .post(multerController.uploadPhoto, resumeController.createResume);

router
  .route('/:id')
  .get(resumeController.getResumeById)
  .patch(multerController.uploadPhoto, resumeController.updateResume)
  .delete(resumeController.deleteResume);

// router.post(
//   '/upload-photo',
//   multerController.uploadPhoto,
//   resumeController.updateResume
// );
// router.patch(
//   '/upload-video',
// resumeController.manipulateUrl,
//   resumeController.updateResume
// );
router.get(
  '/draft',
  resumeController.selectInactive,
  resumeController.getResumes
);
router.patch('/make-draft', resumeController.updateResume);
router.patch('/revert-draft', resumeController.updateResume);

module.exports = router;
// app.post("/form1", multerController.uploadPhoto, resumeController.createResume);

// app.get("/check/:id", resumeController.getResumeById);
// app.get("/usercvdata/:id", resumeController.getResumeById);

// app.put(
//   "/updateform",
//   multerController.uploadPhoto,
//   resumeController.updateResume
// );
// app.delete("/deletedata/:id", resumeController.deleteResume);

// app.get("/data/:id", resumeController.getDraftById);
// app.put("/draftdata/:id", resumeController.createDraft);
// app.patch("/changeuserdata/:id", resumeController.makeResumeFromDraft);
