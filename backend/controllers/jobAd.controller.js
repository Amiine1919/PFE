/*****************CRUD***************/
const JobAd = require("../model/JobAd");

/*****************AddJobAd***************/
exports.addJobAd = async (req, res) => {
  const { title, salary, description } = req.body;
  try {
    const newJobAd = new JobAd({ title, salary, description });
    await newJobAd.save();
    res.status(201).json(newJobAd);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

/*****************GetJobAds***************/
exports.getJobAds = async (req, res) => {
  try {
    const jobAds = await JobAd.find();
    res.status(201).json(jobAds);
  } catch (error) {
    console.error(error);
    res.status(400).json({ errors: error });
  }
};
/*****************EditJobAd***************/
exports.editJobAd = async (req, res) => {
  const { id } = req.params;
  try {
    const jobAdUpdated = await JobAd.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(jobAdUpdated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ errors: error });
  }
};

/*****************DeleteJobAd***************/
exports.deleteJobAd = async (req, res) => {
  const { id } = req.params;
  try {
    await JobAd.findByIdAndDelete(id);
    res.status(201).json(`JobAd deleted !`);
  } catch (error) {
    console.error(error);
    res.status(400).json({ errors: error });
  }
};
