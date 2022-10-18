import axios from "axios";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/MockedData";

/* It's a class that handles the API requests */
export class apiHandler {
/**
 * This function is a constructor that takes a userId as a parameter and sets the userId to the userId
 * passed in, sets the isMockActive to true, and sets the baseUrl to localhost:3030.
 */
  constructor(userId) {
    this.userId = parseInt(userId);
    this.isMockActive = process.env.REACT_APP_IS_MOCK_ACTIVE || "true";
    this.baseUrl = "http://localhost:3030";

    // console.log("api handler started");
  }
/* It's a function that takes two parameters, apiEndpoint and mockedEndpoint. It's a function that
sends a request to the API and returns the response. */
  sendRequest = async ({ apiEndpoint, mockedEndpoint }) => {
    let response = {};

    if (this.isMockActive === 'true') {
      response = await mockedEndpoint.find((data) => (
        data.id === this.userId || data.userId === this.userId
      )) || {};
    } else if (this.isMockActive === 'false') {
      response = await axios.get(`${this.baseUrl}/user/${this.userId}${apiEndpoint}`).then((res) => res.data.data).catch((err) => { return {} });
    }

    return response;
  }

/* It's a function that takes no parameters. It's a function that sends a request to the API and
returns the response. */
  getUserInfos = async () => {
    const response = await this.sendRequest({
      apiEndpoint: `/`,
      mockedEndpoint: USER_MAIN_DATA
    });

/* It's checking if the response is empty or not. If it's empty, it's returning an empty object. */
    if (!response || Object.keys(response).length <= 0) {
      return {};
    }

/* It's a constant that contains the data that will be returned. */
    const data = {
      firstName: response.userInfos.firstName,
      todayScore: response.todayScore || response.score,
      keyData: response.keyData
    }

    return data;
  }

/* It's a function that takes no parameters. It's a function that sends a request to the API and
returns the response. */
  getDailyActivities = async () => {
    const response = await this.sendRequest({
      apiEndpoint: `/activity`,
      mockedEndpoint: USER_ACTIVITY
    });
    // console.log("getDailyActivities Called");

    if (!response || Object.keys(response).length <= 0) {
      return {};
    }

    const data = response.sessions;
    return data.sort((a, b) => new Date(b.day) - new Date(a.day)).reverse();
  }

  getPerformances = async () => {
    const response = await this.sendRequest({
      apiEndpoint: `/performance`,
      mockedEndpoint: USER_PERFORMANCE
    });

    // console.log("getPerformances Called");
    if (!response || Object.keys(response).length <= 0) {
      return {};
    }

    /* It's a constant that contains the activities name. */
    const activitiesName = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    }

    let data = [];

    /* It's a loop that iterates over the response and pushes the data to the formattedData array. */
    if (Object.keys(response).length > 0) {
      for (const item in activitiesName) {
        const activityName = activitiesName[item];

        for (const value in response.data) {
          const dataValue = response.data[value];

          /* It's checking if the dataValue.kind is equal to the item. If it's true, it's pushing the
          data to the formattedData array. */
          if (dataValue.kind === parseInt(item)) {
            data.push({
              activity: activityName,
              value: dataValue.value
            });
          }
        }
      }

/* It's reversing the data. */
      return data.reverse();
    }
  }

  getSessions = async () => {
    const response = await this.sendRequest({
      apiEndpoint: `/average-sessions`,
      mockedEndpoint: USER_AVERAGE_SESSIONS
    });

    // console.log("getSessions Called");

    if (!response || Object.keys(response).length <= 0) {
      return {};
    }

    const data = [];
    if (Object.keys(response.sessions).length > 0) {
      /* It's a loop that iterates over the response and pushes the data to the formattedData array. */
      for (const item of response.sessions) {
        // console.log('item', item)
   /* It's a ternary operator that checks if the item.day is equal to 1, if it's true, it's returning
   L, if it's false, it's checking if the item.day is equal to 2 or 3, if it's true, it's returning
   M, if it's false, it's checking if the item.day is equal to 4, if it's true, it's returning J, if
   it's false, it's checking if the item.day is equal to 5, if it's true, it's returning V, if it's
   false, it's checking if the item.day is equal to 6, if it's true, it's returning S, if it's
   false, it's returning D. */
        const format = {
          day: item.day === 1 ? 'L' :
            item.day === 2 || item.day === 3 ? 'M' :
              item.day === 4 ? 'J' :
                item.day === 5 ? 'V' :
                  item.day === 6 ? 'S' : 'D',
          sessionLength: item.sessionLength
        }
/* It's pushing the format to the data array. */
        data.push(format);
      }
    }

    return data;
  }
}
