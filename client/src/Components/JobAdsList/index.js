import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import JobAdCard from "../JobAdCard";
import { getJobAds } from "../../JS/actions";
import AddEditForm from "../AddEditForm";

import "./index.css";
import VisiterJobAdCard from "../VisiterJobAdCard";

const JobAdsList = () => {
  const isAdmin =
    localStorage.getItem("adminMail") &&
    localStorage.getItem("adminMail").toLowerCase();
  const admin = "medmed@gmail.com";
  const { loading, jobAdsList } = useSelector((state) => state.jobAdReducer);
  const dispatch = useDispatch();
  const getAllJobAds = () => dispatch(getJobAds());
  useEffect(() => {
    getAllJobAds();
  }, [dispatch]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <AddEditForm />
      <div>
        {jobAdsList &&
          jobAdsList.map((jobAd) =>
            isAdmin == admin ? (
              <JobAdCard key={jobAd._id} jobAd={jobAd} />
            ) : (
              <VisiterJobAdCard key={jobAd._id} jobAd={jobAd} />
            )
          )}
      </div>
    </div>
  );
};

export default JobAdsList;
