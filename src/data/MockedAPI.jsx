import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./MockedData";

const ACITVITY_BY_KIND = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

/**
 * @returns {Object}
 */
export const getDefaultKeyData = () => {
  return {
    calorieCount: null,
    proteinCount: null,
    carbohydrateCount: null,
    lipidCount: null,
  };
};

/**
 * This function returns an array of objects, each object containing a key of activity and a key of
 * value, where the value of activity is a string and the value of value is a number.
 * @returns An array of objects with the properties activity and value.
 */
const getDefaultActivities = () => {
  const activities = [];
  for (let key in ACITVITY_BY_KIND) {
    activities.push({
      activity: ACITVITY_BY_KIND[key],
      value: 0,
    });
  }
  return activities;
};

/**
 * @param {number} userId
 * @returns {array.Object}
 */
export const getActivitiesById = (userId) => {
  const activities = [];

  for (let user of USER_PERFORMANCE) {
    if (user.userId === userId) {
      for (let item of user.data) {
        activities.push({
          activity: ACITVITY_BY_KIND[item.kind],
          value: item.value,
        });
      }
      return activities;
    }
  }
  return getDefaultActivities();
};

/**
 * @param {number} userId
 * @returns {array.Object}
 */
export const getAverageSessionsById = (userId) => {
  const averageSessions = [
    {
      day: "L",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "J",
      sessionLength: 0,
    },
    {
      day: "V",
      sessionLength: 0,
    },
    {
      day: "S",
      sessionLength: 0,
    },
    {
      day: "D",
      sessionLength: 0,
    },
  ];

  for (let user of USER_AVERAGE_SESSIONS) {
    if (user.userId === userId) {
      for (let index in user.sessions) {
        averageSessions[index].sessionLength =
          user.sessions[index].sessionLength;
      }
    }
  }

  return averageSessions;
};

/**
 * @returns {array.Object}
 */
const getDefaultDailyActivity = () => {
  const dailyActivity = [];
  let date = new Date(Date.now());

  // eslint-disable-next-line no-unused-vars
  for (let _ of "1234567") {
    let frenchDate = new Intl.DateTimeFormat("fr").format(date);

    dailyActivity.push({
      day: frenchDate.slice(0, 5),
      kilogram: 0,
      calories: 0,
    });

    date.setDate(date.getDate() - 1);
  }

  dailyActivity.reverse();

  return dailyActivity;
};

/**
 * @param {number} userId
 * @returns {array.Object}
 */
export const getDailyActivityById = (userId) => {
  const dailyActivity = [];

  for (let user of USER_ACTIVITY) {
    if (user.userId === userId) {
      for (let item of user.sessions) {
        // eslint-disable-next-line no-unused-vars
        const [yyyy, mm, dd] = item.day.split("-");

        dailyActivity.push({
          day: `${dd.toString().charAt(0) === '0' ? dd.toString().replace('0', '') : dd.toString()}`,
          kilogram: item.kilogram,
          calories: item.calories,
        });
      }
      return dailyActivity;
    }
  }
  return getDefaultDailyActivity();
};

/**
 * @param {number} userId
 * @returns {string}
 */
export const getFirstNameById = (userId) => {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user.userInfos.firstName;
    }
  }
  return "unknown user";
};

/**
 * @param {number} userId
 * @returns {Object}
 */
export const getKeyDataById = (userId) => {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user.keyData;
    }
  }
  return getDefaultKeyData();
};

/**
 * @param {number} userId
 * @returns {number}
 */
export const getTodayScoreById = (userId) => {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user.score || user.todayScore;
    }
  }
  return 0;
};
