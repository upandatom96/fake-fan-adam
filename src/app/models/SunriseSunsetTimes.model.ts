export interface SunriseSunsetTimes {
  date: string;
  sunriseTime: string;
  sunsetTime: string;
  dayLength: string;
}

export interface SunriseSunsetTimesResults {
  sunrise: string;
  sunset: string;
  day_length: number;
}

export interface SunriseSunsetTimesResponse {
  results: SunriseSunsetTimesResults;
}

// FULL SAMPLE
// {
//   "results": {
//   "sunrise": "2022-07-17T10:53:40+00:00",
//     "sunset": "2022-07-18T01:47:31+00:00",
//     "solar_noon": "2022-07-17T18:20:36+00:00",
//     "day_length": 53631,
//     "civil_twilight_begin": "2022-07-17T10:22:31+00:00",
//     "civil_twilight_end": "2022-07-18T02:18:40+00:00",
//     "nautical_twilight_begin": "2022-07-17T09:41:09+00:00",
//     "nautical_twilight_end": "2022-07-18T03:00:02+00:00",
//     "astronomical_twilight_begin": "2022-07-17T08:53:23+00:00",
//     "astronomical_twilight_end": "2022-07-18T03:47:48+00:00"
// },
//   "status": "OK"
// }
