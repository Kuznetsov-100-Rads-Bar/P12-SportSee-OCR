import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { useSportSeeAPI } from "./services/useSportSeeAPI";
import { useParams } from 'react-router-dom';

export default function App() {
  const params = useParams();
  const userId = params.id;
  const [activities, setActivities] = useState(useSportSeeAPI('activities', userId));
  const [averageSessions, setAverageSessions] = useState({});
  const [dailyActivities, setDailyActivities] = useState({});
  const [firstName, setFirstName] = useState({});
  const [keyData, setKeyData] = useState({});
  const [todayScore, setTodayScore] = useState({});

  useEffect(() => {
    console.log(activities)
  }, [])
  return (
    <Dashboard />
  );
}
