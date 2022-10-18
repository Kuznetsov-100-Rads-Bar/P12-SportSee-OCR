import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { useParams } from 'react-router-dom';
import { apiHandler } from "./services/apiHandler.service";
import { useNavigate } from "react-router-dom";

export default function App() {
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate();
  let apiService = new apiHandler(userId);


  const [activities, setActivities] = useState({});
  const [averageSessions, setAverageSessions] = useState({});
  const [dailyActivities, setDailyActivities] = useState({});
  const [userInfos, setUserInfos] = useState({});

  useEffect(() => {
    // apiService.getUserInfos();
    const getUserInfos = async () => {
      const response = await apiService.getUserInfos();

      if (Object.keys(response).length <= 0) {
        return navigate('/404');
      }

      if (response) {
        setUserInfos(response);
      }
    }

    const getDailyActivities = async () => {
      const response = await apiService.getDailyActivities();

      if (Object.keys(response).length <= 0) {
        return navigate('/404');
      }

      if (response) {
        setDailyActivities(response);
      }
    }

    const getPerformances = async () => {
      const response = await apiService.getPerformances();

      if (Object.keys(response).length <= 0) {
        return navigate('/404');
      }

      if (response) {
        setActivities(response);
      }
    }

    const getSessions = async () => {
      const response = await apiService.getSessions();

      if (Object.keys(response).length <= 0) {
        return navigate('/404');
      }

      if (response) {
        setAverageSessions(response);
      }
    }

    getUserInfos();
    getDailyActivities();
    getPerformances();
    getSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(userInfos);
  // console.log(dailyActivities);
  // console.log(activities);
  // console.log(averageSessions);
  if (
    Object.keys(userInfos) <= 0 ||
    Object.keys(dailyActivities) <= 0 ||
    Object.keys(activities) <= 0 ||
    Object.keys(averageSessions) <= 0
  ) {
    return (
      <pre>Loading...</pre>
    )
  } else {
    return (
      <Dashboard userInfos={userInfos} dailyActivities={dailyActivities} averageSessions={averageSessions} activities={activities} />
    );
  }
}
