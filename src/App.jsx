/* It's importing the useState, useEffect, useNavigate, useParams, useLocation, and apiHandler hooks. */
import React, { useState, useEffect } from "react";
/* It's importing the Dashboard component. */
import Dashboard from "./pages/Dashboard";
import {useNavigate, useParams, useLocation } from 'react-router-dom';
import { apiHandler } from "./services/apiHandler.service";

/**
 * I'm using the useEffect hook to fetch data from an API and then I'm using the useState hook to set
 * the data to a state.
 * </code>
 * @returns The userInfos, dailyActivities, averageSessions, and activities are being returned.
 */
/* It's using the useLocation, useParams, and useNavigate hooks to get the location, params, and
  navigate. */
export default function App() {
  const location = useLocation();
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate();
  /* It's creating a new instance of the apiHandler class. */
  let apiService = new apiHandler(userId);


/* It's creating a state for each of the data that I'm fetching from the API. */
  const [activities, setActivities] = useState({});
  const [averageSessions, setAverageSessions] = useState({});
  const [dailyActivities, setDailyActivities] = useState({});
  const [userInfos, setUserInfos] = useState({});

/* It's a hook that is used to perform side effects in function components. */
  useEffect(() => {
    // apiService.getUserInfos();
/**
 * I'm going to call the getUserInfos function from the apiService file, and if the response is not
 * empty, I'm going to set the userInfos state with the response.
 * @returns The response from the API call.
 */
    const getUserInfos = async () => {
     
      const response = await apiService.getUserInfos();

      // if (Object.keys(response).length <= 0) {
      //   return navigate('/404');
      // }

      if (response) {
        setUserInfos(response);
      }

      return response
    }

 /**
  * GetDailyActivities() is an async function that calls the apiService.getDailyActivities() function,
  * which returns a response object. If the response object is not empty, setDailyActivities() is
  * called with the response object as an argument. Finally, the response object is returned.
  * @returns The response from the API call.
  */
    const getDailyActivities = async () => {
      const response = await apiService.getDailyActivities();

      // if (Object.keys(response).length <= 0) {
      //   return navigate('/404');
      // }

      if (response) {
        setDailyActivities(response);
      }

      return response
    }

/**
 * GetPerformances() is an async function that calls the getPerformances() function from the
 * apiService.js file, and if the response is not empty, it sets the activities state to the response,
 * and returns the response.
 * @returns The response from the API call.
 */
    const getPerformances = async () => {
      const response = await apiService.getPerformances();

      // if (Object.keys(response).length <= 0) {
      //   return navigate('/404');
      // }

      if (response) {
        setActivities(response);
      }

      return response
    }

    /**
     * GetSessions() is an async function that calls the apiService.getSessions() function, which
     * returns a response object. If the response object is not empty, then setAverageSessions() is
     * called with the response object as an argument. Finally, the response object is returned.
     * @returns The response from the API call.
     */
    const getSessions = async () => {
      const response = await apiService.getSessions();

      // if (Object.keys(response).length <= 0) {
      //   return navigate('/404');
      // }

      if (response) {
        setAverageSessions(response);
      }

      return response
    }

      /* It's waiting for all the promises to be resolved before returning the data. */
    const allPromises = Promise.all([getUserInfos(), getDailyActivities(),getPerformances(),getSessions()]);
    allPromises.catch(() => {
      navigate('/404')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(userInfos);
  // console.log(dailyActivities);
  // console.log(activities);
  // console.log(averageSessions);
  /* It's checking if the data is empty or not. If it's empty, it will return a loading message. If it's
  not empty, it will return the Dashboard component. */
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
        /* It's passing the location, userInfos, dailyActivities, averageSessions, and activities to the
        Dashboard component. */
      <Dashboard location={location.pathname} userInfos={userInfos} dailyActivities={dailyActivities} averageSessions={averageSessions} activities={activities} />
    );
  }
}
