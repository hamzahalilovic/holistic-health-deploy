export function Device(device) {
  let result;

  switch (device) {
    case "fitbit":
      result = [
        {
          name: "Feb-26",
          totalCalories: 2849,
          activeCalories: 1330,
          totalSteps: 15147,
          totalDistance: 13.65 * 1000,
          inactiveMinutes: 737,
          lowActiveMinutes: 80,
          mediumActiveMinutes: 7,
          highActiveMinutes: 90,
          lightSleepTime: 236,
          deepSleepTime: 58,
          timeSpentInBed: 435,
          totalSleepTime: 392,
          REMSleepTime: 98,
          totalAwakeTime: 43,
        },
        {
          name: "Feb-27",
          totalCalories: 3657,
          activeCalories: 2326,
          totalSteps: 27664,
          totalDistance: 20.1 * 1000,
          inactiveMinutes: 707,
          lowActiveMinutes: 123,
          mediumActiveMinutes: 14,
          highActiveMinutes: 217,
          lightSleepTime: 187,
          deepSleepTime: 52,
          timeSpentInBed: 91 + 379,
          totalSleepTime: 89 + 354, //user recorded sleep twice in one night
          REMSleepTime: 115,
          totalAwakeTime: 2 + 25,
        },
        {
          name: "Feb-28",
          totalCalories: 2912,
          activeCalories: 1374,
          totalSteps: 15128,
          totalDistance: 13.62 * 1000,
          inactiveMinutes: 764,
          lowActiveMinutes: 97,
          mediumActiveMinutes: 5,
          highActiveMinutes: 92,
          lightSleepTime: 293,
          deepSleepTime: 75,
          timeSpentInBed: 482,
          totalSleepTime: 435,
          REMSleepTime: 67,
          totalAwakeTime: 47,
        },
        {
          name: "Mar-1",
          totalCalories: 2893,
          activeCalories: 1408,
          totalSteps: 15986,
          totalDistance: 14.36 * 1000,
          inactiveMinutes: 844,
          lowActiveMinutes: 102,
          mediumActiveMinutes: 9,
          highActiveMinutes: 88,
          lightSleepTime: 187,
          deepSleepTime: 54,
          timeSpentInBed: 397,
          totalSleepTime: 346,
          REMSleepTime: 105,
          totalAwakeTime: 51,
        },
        {
          name: "Mar-2",
          totalCalories: 2810,
          activeCalories: 1312,
          totalSteps: 15097,
          totalDistance: 13.64 * 1000,
          inactiveMinutes: 801,
          lowActiveMinutes: 85,
          mediumActiveMinutes: 7,
          highActiveMinutes: 88,
          lightSleepTime: 245,
          deepSleepTime: 53,
          timeSpentInBed: 459,
          totalSleepTime: 401,
          REMSleepTime: 103,
          totalAwakeTime: 58,
        },
        {
          name: "Mar-3",
          totalCalories: 3741,
          activeCalories: 2429,
          totalSteps: 28905,
          totalDistance: 23.68 * 1000,
          inactiveMinutes: 642,
          lowActiveMinutes: 121,
          mediumActiveMinutes: 14,
          highActiveMinutes: 205,
          lightSleepTime: 266,
          deepSleepTime: 44,
          timeSpentInBed: 458,
          totalSleepTime: 405,
          REMSleepTime: 95,
          totalAwakeTime: 53,
        },
        {
          name: "Mar-4",
          totalCalories: 2895,
          activeCalories: 1438,
          totalSteps: 15727,
          totalDistance: 14.06 * 1000,
          inactiveMinutes: 999,
          lowActiveMinutes: 120,
          mediumActiveMinutes: 4,
          highActiveMinutes: 87,
          lightSleepTime: 160,
          deepSleepTime: 16,
          timeSpentInBed: 230,
          totalSleepTime: 205,
          REMSleepTime: 29,
          totalAwakeTime: 25,
        },
        {
          name: "Mar-5",
          totalCalories: 2847,
          activeCalories: 1310,
          totalSteps: 15011,
          totalDistance: 13.57 * 1000,
          inactiveMinutes: 861,
          lowActiveMinutes: 80,
          mediumActiveMinutes: 8,
          highActiveMinutes: 88,
          lightSleepTime: 253,
          deepSleepTime: 17,
          timeSpentInBed: 403,
          totalSleepTime: 364,
          REMSleepTime: 94,
          totalAwakeTime: 39,
        },
        {
          name: "Mar-6",
          totalCalories: 3606,
          activeCalories: 2314,
          totalSteps: 28326,
          totalDistance: 20.58 * 1000,
          inactiveMinutes: 791,
          lowActiveMinutes: 115,
          mediumActiveMinutes: 19,
          highActiveMinutes: 217,
          lightSleepTime: 173,
          deepSleepTime: 54,
          timeSpentInBed: 298,
          totalSleepTime: 264,
          REMSleepTime: 37,
          totalAwakeTime: 34,
        },
        {
          name: "Mar-7",
          totalCalories: 2892,
          activeCalories: 1465,
          totalSteps: 15701,
          totalDistance: 13.97 * 1000,
          inactiveMinutes: 1231,
          lowActiveMinutes: 121,
          mediumActiveMinutes: 2,
          highActiveMinutes: 86,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-8",
          totalCalories: 2965,
          activeCalories: 1578,
          totalSteps: 16629,
          totalDistance: 14.62 * 1000,
          inactiveMinutes: 1197,
          lowActiveMinutes: 155,
          mediumActiveMinutes: 3,
          highActiveMinutes: 85,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-9",
          totalCalories: 2876,
          activeCalories: 1454,
          totalSteps: 15738,
          totalDistance: 13.81 * 1000,
          inactiveMinutes: 1228,
          lowActiveMinutes: 127,
          mediumActiveMinutes: 0,
          highActiveMinutes: 85,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-10",
          totalCalories: 2881,
          activeCalories: 1442,
          totalSteps: 15621,
          totalDistance: 13.86 * 1000,
          inactiveMinutes: 1236,
          lowActiveMinutes: 118,
          mediumActiveMinutes: 2,
          highActiveMinutes: 84,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-11",
          totalCalories: 2884,
          activeCalories: 1464,
          totalSteps: 15485,
          totalDistance: 13.81 * 1000,
          inactiveMinutes: 1227,
          lowActiveMinutes: 128,
          mediumActiveMinutes: 2,
          highActiveMinutes: 83,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-12",
          totalCalories: 3684,
          activeCalories: 2394,
          totalSteps: 28338,
          totalDistance: 23.15 * 1000,
          inactiveMinutes: 1112,
          lowActiveMinutes: 129,
          mediumActiveMinutes: 6,
          highActiveMinutes: 193,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-13",
          totalCalories: 3599,
          activeCalories: 2350,
          totalSteps: 28942,
          totalDistance: 21.03 * 1000,
          inactiveMinutes: 1078,
          lowActiveMinutes: 129,
          mediumActiveMinutes: 16,
          highActiveMinutes: 217,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-14",
          totalCalories: 2990,
          activeCalories: 1592,
          totalSteps: 17096,
          totalDistance: 14.98 * 1000,
          inactiveMinutes: 1201,
          lowActiveMinutes: 153,
          mediumActiveMinutes: 2,
          highActiveMinutes: 84,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-15",
          totalCalories: 2945,
          activeCalories: 1543,
          totalSteps: 16500,
          totalDistance: 14.55 * 1000,
          inactiveMinutes: 1210,
          lowActiveMinutes: 142,
          mediumActiveMinutes: 2,
          highActiveMinutes: 86,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-16",
          totalCalories: 2977,
          activeCalories: 1590,
          totalSteps: 16484,
          totalDistance: 14.6 * 1000,
          inactiveMinutes: 1193,
          lowActiveMinutes: 162,
          mediumActiveMinutes: 2,
          highActiveMinutes: 83,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-17",
          totalCalories: 3689,
          activeCalories: 2417,
          totalSteps: 28250,
          totalDistance: 23.06 * 1000,
          inactiveMinutes: 1099,
          lowActiveMinutes: 141,
          mediumActiveMinutes: 8,
          highActiveMinutes: 192,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-18",
          totalCalories: 2920,
          activeCalories: 1509,
          totalSteps: 16004,
          totalDistance: 14.2 * 1000,
          inactiveMinutes: 1215,
          lowActiveMinutes: 138,
          mediumActiveMinutes: 5,
          highActiveMinutes: 82,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-19",
          totalCalories: 3164,
          activeCalories: 1820,
          totalSteps: 19342,
          totalDistance: 16.72 * 1000,
          inactiveMinutes: 1158,
          lowActiveMinutes: 173,
          mediumActiveMinutes: 4,
          highActiveMinutes: 105,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-20",
          totalCalories: 3540,
          activeCalories: 2268,
          totalSteps: 28091,
          totalDistance: 20.41 * 1000,
          inactiveMinutes: 1095,
          lowActiveMinutes: 111,
          mediumActiveMinutes: 15,
          highActiveMinutes: 219,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-21",
          totalCalories: 2895,
          activeCalories: 1465,
          totalSteps: 15829,
          totalDistance: 14.04 * 1000,
          inactiveMinutes: 1231,
          lowActiveMinutes: 123,
          mediumActiveMinutes: 2,
          highActiveMinutes: 84,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-22",
          totalCalories: 2887,
          activeCalories: 1453,
          totalSteps: 15725,
          totalDistance: 14.02 * 1000,
          inactiveMinutes: 1233,
          lowActiveMinutes: 120,
          mediumActiveMinutes: 2,
          highActiveMinutes: 85,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-23",
          totalCalories: 2963,
          activeCalories: 1576,
          totalSteps: 16454,
          totalDistance: 14.56 * 1000,
          inactiveMinutes: 1197,
          lowActiveMinutes: 159,
          mediumActiveMinutes: 2,
          highActiveMinutes: 82,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-24",
          totalCalories: 3767,
          activeCalories: 2484,
          totalSteps: 30165,
          totalDistance: 24.25 * 1000,
          inactiveMinutes: 1104,
          lowActiveMinutes: 113,
          mediumActiveMinutes: 11,
          highActiveMinutes: 212,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-25",
          totalCalories: 2813,
          activeCalories: 1393,
          totalSteps: 14234,
          totalDistance: 13.02 * 1000,
          inactiveMinutes: 1225,
          lowActiveMinutes: 149,
          mediumActiveMinutes: 1,
          highActiveMinutes: 65,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-26",
          totalCalories: 2861,
          activeCalories: 1425,
          totalSteps: 15155,
          totalDistance: 13.65 * 1000,
          inactiveMinutes: 1236,
          lowActiveMinutes: 139,
          mediumActiveMinutes: 0,
          highActiveMinutes: 65,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
        {
          name: "Mar-27",
          totalCalories: 3562,
          activeCalories: 1310,
          totalSteps: 28389,
          totalDistance: 20.63 * 1000,
          inactiveMinutes: 1082,
          lowActiveMinutes: 128,
          mediumActiveMinutes: 15,
          highActiveMinutes: 215,
          lightSleepTime: 0,
          deepSleepTime: 0,
          timeSpentInBed: 0,
          totalSleepTime: 0,
          REMSleepTime: 0,
          totalAwakeTime: 0,
        },
      ];
      break;

    case "oura":
      result = [
        {
          name: "Feb-26",
          totalCalories: 3356,
          activeCalories: 1229,
          totalSteps: 13815,
          totalDistance: 19443,
          inactiveMinutes: 628,
          lowActiveMinutes: 152,
          mediumActiveMinutes: 42,
          highActiveMinutes: 72,
          lightSleepTime: 12450 / 60,
          deepSleepTime: 6810 / 60,
          timeSpentInBed: 26340 / 60,
          totalSleepTime: 23670 / 60,
          REMSleepTime: 4410 / 60,
          totalAwakeTime: 2670 / 60,
          restlessSleep: 30,
          averageHRV: 43,
          averageRestingHR: 55.93,
          respiratoryRate: 16,
          temperatureDeviation: 0.02,
        },
        {
          name: "Feb-27",
          totalCalories: 3336,
          activeCalories: 1175,
          totalSteps: 29532,
          totalDistance: 22026,
          inactiveMinutes: 520,
          lowActiveMinutes: 216,
          mediumActiveMinutes: 238,
          highActiveMinutes: 0,
          lightSleepTime: 13050 / 60,
          deepSleepTime: 2850 / 60,
          timeSpentInBed: 23100 / 60,
          totalSleepTime: 22110 / 60,
          REMSleepTime: 6210 / 60,
          totalAwakeTime: 990 / 60,
          restlessSleep: 22,
          averageHRV: 24,
          averageRestingHR: 64.2,
          respiratoryRate: 16.125,
          temperatureDeviation: 0.32,
        },
        {
          name: "Feb-28",
          totalCalories: 3336,
          activeCalories: 1187,
          totalSteps: 14565,
          totalDistance: 18470,
          inactiveMinutes: 702,
          lowActiveMinutes: 197,
          mediumActiveMinutes: 34,
          highActiveMinutes: 69,
          lightSleepTime: 15810 / 60,
          deepSleepTime: 3480 / 60,
          timeSpentInBed: 29580 / 60,
          totalSleepTime: 26490 / 60,
          REMSleepTime: 7200 / 60,
          totalAwakeTime: 3090 / 60,
          restlessSleep: 19,
          averageHRV: 22,
          averageRestingHR: 64.68,
          respiratoryRate: 16.375,
          temperatureDeviation: 0.16,
        },
        {
          name: "Mar-1",
          totalCalories: 3391,
          activeCalories: 1251,
          totalSteps: 15413,
          totalDistance: 19910,
          inactiveMinutes: 674,
          lowActiveMinutes: 205,
          mediumActiveMinutes: 38,
          highActiveMinutes: 70,
          lightSleepTime: 15510 / 60,
          deepSleepTime: 4410 / 60,
          timeSpentInBed: 26580 / 60,
          totalSleepTime: 24510 / 60,
          REMSleepTime: 4590 / 60,
          totalAwakeTime: 2070 / 60,
          restlessSleep: 19,
          averageHRV: 38,
          averageRestingHR: 57.33,
          respiratoryRate: 16.875,
          temperatureDeviation: -0.25,
        },
        {
          name: "Mar-2",
          totalCalories: 3224,
          activeCalories: 1085,
          totalSteps: 14132,
          totalDistance: 16976,
          inactiveMinutes: 681,
          lowActiveMinutes: 190,
          mediumActiveMinutes: 32,
          highActiveMinutes: 66,
          lightSleepTime: 12450 / 60,
          deepSleepTime: 5100 / 60,
          timeSpentInBed: 27420 / 60,
          totalSleepTime: 23760 / 60,
          REMSleepTime: 6210 / 60,
          totalAwakeTime: 3660 / 60,
          restlessSleep: 25,
          averageHRV: 47,
          averageRestingHR: 56.53,
          respiratoryRate: 16.875,
          temperatureDeviation: -0.03,
        },
        {
          name: "Mar-3",
          totalCalories: 3962,
          activeCalories: 1762,
          totalSteps: 28454,
          totalDistance: 29670,
          inactiveMinutes: 609,
          lowActiveMinutes: 201,
          mediumActiveMinutes: 161,
          highActiveMinutes: 72,
          lightSleepTime: 15240 / 60,
          deepSleepTime: 4140 / 60,
          timeSpentInBed: 27360 / 60,
          totalSleepTime: 24720 / 60,
          REMSleepTime: 5340 / 60,
          totalAwakeTime: 2640 / 60,
          restlessSleep: 25,
          averageHRV: 42,
          averageRestingHR: 57.04,
          respiratoryRate: 16.875,
          temperatureDeviation: -0.03,
        },
        {
          name: "Mar-4",
          totalCalories: 3401,
          activeCalories: 1248,
          totalSteps: 15372,
          totalDistance: 19721,
          inactiveMinutes: 600,
          lowActiveMinutes: 220,
          mediumActiveMinutes: 48,
          highActiveMinutes: 68,
          lightSleepTime: 10560 / 60,
          deepSleepTime: 7410 / 60,
          timeSpentInBed: 26400 / 60,
          totalSleepTime: 22920 / 60,
          REMSleepTime: 4950 / 60,
          totalAwakeTime: 3480 / 60,
          restlessSleep: 24,
          averageHRV: 58,
          averageRestingHR: 53.83,
          respiratoryRate: 15.875,
          temperatureDeviation: -0.1,
        },
        {
          name: "Mar-5",
          totalCalories: 3469,
          activeCalories: 1352,
          totalSteps: 14159,
          totalDistance: 21491,
          inactiveMinutes: 638,
          lowActiveMinutes: 155,
          mediumActiveMinutes: 58,
          highActiveMinutes: 69,
          lightSleepTime: 11430 / 60,
          deepSleepTime: 6450 / 60,
          timeSpentInBed: 24720 / 60,
          totalSleepTime: 22170 / 60,
          REMSleepTime: 4290 / 60,
          totalAwakeTime: 2550 / 60,
          restlessSleep: 18,
          averageHRV: 45,
          averageRestingHR: 54.04,
          respiratoryRate: 15.75,
          temperatureDeviation: 0.03,
        },
        {
          name: "Mar-6",
          totalCalories: 3304,
          activeCalories: 1175,
          totalSteps: 29645,
          totalDistance: 22148,
          inactiveMinutes: 470,
          lowActiveMinutes: 183,
          mediumActiveMinutes: 242,
          highActiveMinutes: 1,
          lightSleepTime: 14460 / 60,
          deepSleepTime: 3210 / 60,
          timeSpentInBed: 25380 / 60,
          totalSleepTime: 23880 / 60,
          REMSleepTime: 6210 / 60,
          totalAwakeTime: 1500 / 60,
          restlessSleep: 21,
          averageHRV: 27,
          averageRestingHR: 62.85,
          respiratoryRate: 16.125,
          temperatureDeviation: 0.07,
        },
        {
          name: "Mar-7",
          totalCalories: 3537,
          activeCalories: 1376,
          totalSteps: 14954,
          totalDistance: 21650,
          inactiveMinutes: 665,
          lowActiveMinutes: 201,
          mediumActiveMinutes: 61,
          highActiveMinutes: 69,
          lightSleepTime: 22020 / 60,
          deepSleepTime: 2010 / 60,
          timeSpentInBed: 28500 / 60,
          totalSleepTime: 26370 / 60,
          REMSleepTime: 2340 / 60,
          totalAwakeTime: 2130 / 60,
          restlessSleep: 21,
          averageHRV: 21,
          averageRestingHR: 66.01,
          respiratoryRate: 16.25,
          temperatureDeviation: 0.12,
        },
        {
          name: "Mar-8",
          totalCalories: 3496,
          activeCalories: 1344,
          totalSteps: 15576,
          totalDistance: 21449,
          inactiveMinutes: 678,
          lowActiveMinutes: 188,
          mediumActiveMinutes: 47,
          highActiveMinutes: 85,
          lightSleepTime: 10170 / 60,
          deepSleepTime: 8040 / 60,
          timeSpentInBed: 25200 / 60,
          totalSleepTime: 21930 / 60,
          REMSleepTime: 3720 / 60,
          totalAwakeTime: 3270 / 60,
          restlessSleep: 22,
          averageHRV: 57,
          averageRestingHR: 53.14,
          respiratoryRate: 15.5,
          temperatureDeviation: -0.08,
        },
        {
          name: "Mar-9",
          totalCalories: 3285,
          activeCalories: 1138,
          totalSteps: 14696,
          totalDistance: 18013,
          inactiveMinutes: 689,
          lowActiveMinutes: 213,
          mediumActiveMinutes: 36,
          highActiveMinutes: 69,
          lightSleepTime: 15270 / 60,
          deepSleepTime: 3750 / 60,
          timeSpentInBed: 26220 / 60,
          totalSleepTime: 24090 / 60,
          REMSleepTime: 5070 / 60,
          totalAwakeTime: 2130 / 60,
          restlessSleep: 26,
          averageHRV: 32,
          averageRestingHR: 59.83,
          respiratoryRate: 16,
          temperatureDeviation: 0.02,
        },
        {
          name: "Mar-10",
          totalCalories: 3322,
          activeCalories: 1186,
          totalSteps: 14270,
          totalDistance: 18784,
          inactiveMinutes: 588,
          lowActiveMinutes: 176,
          mediumActiveMinutes: 47,
          highActiveMinutes: 70,
          lightSleepTime: 15090 / 60,
          deepSleepTime: 3210 / 60,
          timeSpentInBed: 27000 / 60,
          totalSleepTime: 25320 / 60,
          REMSleepTime: 7020 / 60,
          totalAwakeTime: 1680 / 60,
          restlessSleep: 33,
          averageHRV: 33,
          averageRestingHR: 60.91,
          respiratoryRate: 16.375,
          temperatureDeviation: 0.02,
        },
        {
          name: "Mar-11",
          totalCalories: 3362,
          activeCalories: 1195,
          totalSteps: 14616,
          totalDistance: 18719,
          inactiveMinutes: 729,
          lowActiveMinutes: 205,
          mediumActiveMinutes: 36,
          highActiveMinutes: 67,
          lightSleepTime: 10050 / 60,
          deepSleepTime: 6630 / 60,
          timeSpentInBed: 25200 / 60,
          totalSleepTime: 21210 / 60,
          REMSleepTime: 4530 / 60,
          totalAwakeTime: 3990 / 60,
          restlessSleep: 22,
          averageHRV: 37,
          averageRestingHR: 59.24,
          respiratoryRate: 16.5,
          temperatureDeviation: -0.26,
        },
        {
          name: "Mar-12",
          totalCalories: 3949,
          activeCalories: 1787,
          totalSteps: 25034,
          totalDistance: 30366,
          inactiveMinutes: 637,
          lowActiveMinutes: 152,
          mediumActiveMinutes: 149,
          highActiveMinutes: 92,
          lightSleepTime: 10110 / 60,
          deepSleepTime: 6750 / 60,
          timeSpentInBed: 24060 / 60,
          totalSleepTime: 21120 / 60,
          REMSleepTime: 4260 / 60,
          totalAwakeTime: 2940 / 60,
          restlessSleep: 31,
          averageHRV: 55,
          averageRestingHR: 56.93,
          respiratoryRate: 16,
          temperatureDeviation: -0.02,
        },
        {
          name: "Mar-13",
          totalCalories: 3428,
          activeCalories: 1297,
          totalSteps: 29989,
          totalDistance: 24410,
          inactiveMinutes: 496,
          lowActiveMinutes: 137,
          mediumActiveMinutes: 272,
          highActiveMinutes: 1,
          lightSleepTime: 10530 / 60,
          deepSleepTime: 4140 / 60,
          timeSpentInBed: 25620 / 60,
          totalSleepTime: 22170 / 60,
          REMSleepTime: 7500 / 60,
          totalAwakeTime: 3450 / 60,
          restlessSleep: 24,
          averageHRV: 21,
          averageRestingHR: 68.32,
          respiratoryRate: 13.5,
          temperatureDeviation: 0.26,
        },
        {
          name: "Mar-14",
          totalCalories: 3406,
          activeCalories: 1228,
          totalSteps: 16178,
          totalDistance: 19120,
          inactiveMinutes: 645,
          lowActiveMinutes: 269,
          mediumActiveMinutes: 35,
          highActiveMinutes: 67,
          lightSleepTime: 17970 / 60,
          deepSleepTime: 2280 / 60,
          timeSpentInBed: 28380 / 60,
          totalSleepTime: 26340 / 60,
          REMSleepTime: 6090 / 60,
          totalAwakeTime: 2040 / 60,
          restlessSleep: 30,
          averageHRV: 21,
          averageRestingHR: 67.59,
          respiratoryRate: 16.125,
          temperatureDeviation: 0.07,
        },
        {
          name: "Mar-15",
          totalCalories: 3430,
          activeCalories: 1270,
          totalSteps: 15369,
          totalDistance: 19883,
          inactiveMinutes: 712,
          lowActiveMinutes: 212,
          mediumActiveMinutes: 37,
          highActiveMinutes: 70,
          lightSleepTime: 11700 / 60,
          deepSleepTime: 5700 / 60,
          timeSpentInBed: 26820 / 60,
          totalSleepTime: 22770 / 60,
          REMSleepTime: 5370 / 60,
          totalAwakeTime: 4050 / 60,
          restlessSleep: 29,
          averageHRV: 43,
          averageRestingHR: 55.89,
          respiratoryRate: 16.5,
          temperatureDeviation: -0.21,
        },
        {
          name: "Mar-16",
          totalCalories: 3337,
          activeCalories: 1198,
          totalSteps: 14844,
          totalDistance: 18942,
          inactiveMinutes: 593,
          lowActiveMinutes: 184,
          mediumActiveMinutes: 36,
          highActiveMinutes: 66,
          lightSleepTime: 10170 / 60,
          deepSleepTime: 6780 / 60,
          timeSpentInBed: 23340 / 60,
          totalSleepTime: 21570 / 60,
          REMSleepTime: 4620 / 60,
          totalAwakeTime: 1770 / 60,
          restlessSleep: 24,
          averageHRV: 38,
          averageRestingHR: 58.55,
          respiratoryRate: 16.25,
          temperatureDeviation: -0.16,
        },
        {
          name: "Mar-17",
          totalCalories: 3853,
          activeCalories: 1657,
          totalSteps: 24896,
          totalDistance: 27888,
          inactiveMinutes: 581,
          lowActiveMinutes: 204,
          mediumActiveMinutes: 152,
          highActiveMinutes: 67,
          lightSleepTime: 12090 / 60,
          deepSleepTime: 3960 / 60,
          timeSpentInBed: 24360 / 60,
          totalSleepTime: 20520 / 60,
          REMSleepTime: 4470 / 60,
          totalAwakeTime: 3840 / 60,
          restlessSleep: 26,
          averageHRV: 43,
          averageRestingHR: 55.96,
          respiratoryRate: 15.5,
          temperatureDeviation: -0.3,
        },
        {
          name: "Mar-18",
          totalCalories: 3370,
          activeCalories: 1210,
          totalSteps: 14792,
          totalDistance: 18819,
          inactiveMinutes: 667,
          lowActiveMinutes: 222,
          mediumActiveMinutes: 40,
          highActiveMinutes: 65,
          lightSleepTime: 11910 / 60,
          deepSleepTime: 7500 / 60,
          timeSpentInBed: 26640 / 60,
          totalSleepTime: 24330 / 60,
          REMSleepTime: 4920 / 60,
          totalAwakeTime: 2310 / 60,
          restlessSleep: 25,
          averageHRV: 44,
          averageRestingHR: 56.98,
          respiratoryRate: 16.375,
          temperatureDeviation: -0.05,
        },
        {
          name: "Mar-19",
          totalCalories: 3477,
          activeCalories: 1342,
          totalSteps: 17413,
          totalDistance: 21968,
          inactiveMinutes: 626,
          lowActiveMinutes: 193,
          mediumActiveMinutes: 83,
          highActiveMinutes: 70,
          lightSleepTime: 13050 / 60,
          deepSleepTime: 5400 / 60,
          timeSpentInBed: 26700 / 60,
          totalSleepTime: 22620 / 60,
          REMSleepTime: 4170 / 60,
          totalAwakeTime: 4080 / 60,
          restlessSleep: 26,
          averageHRV: 39,
          averageRestingHR: 57.85,
          respiratoryRate: 16.375,
          temperatureDeviation: 0.04,
        },
        {
          name: "Mar-20",
          totalCalories: 3325,
          activeCalories: 1201,
          totalSteps: 28816,
          totalDistance: 22760,
          inactiveMinutes: 509,
          lowActiveMinutes: 123,
          mediumActiveMinutes: 261,
          highActiveMinutes: 0,
          lightSleepTime: 12720 / 60,
          deepSleepTime: 2850 / 60,
          timeSpentInBed: 28380 / 60,
          totalSleepTime: 23700 / 60,
          REMSleepTime: 8130 / 60,
          totalAwakeTime: 4680 / 60,
          restlessSleep: 27,
          averageHRV: 17,
          averageRestingHR: 69.23,
          respiratoryRate: 16.25,
          temperatureDeviation: 0.52,
        },
        {
          name: "Mar-21",
          totalCalories: 3654,
          activeCalories: 1463,
          totalSteps: 15539,
          totalDistance: 24659,
          inactiveMinutes: 631,
          lowActiveMinutes: 209,
          mediumActiveMinutes: 139,
          highActiveMinutes: 67,
          lightSleepTime: 22980 / 60,
          deepSleepTime: 540 / 60,
          timeSpentInBed: 30120 / 60,
          totalSleepTime: 27510 / 60,
          REMSleepTime: 3990 / 60,
          totalAwakeTime: 2610 / 60,
          restlessSleep: 27,
          averageHRV: 19,
          averageRestingHR: 68.35,
          respiratoryRate: 17.125,
          temperatureDeviation: 0.5,
        },
        {
          name: "Mar-22",
          totalCalories: 3275,
          activeCalories: 1150,
          totalSteps: 13864,
          totalDistance: 18053,
          inactiveMinutes: 553,
          lowActiveMinutes: 151,
          mediumActiveMinutes: 35,
          highActiveMinutes: 69,
          lightSleepTime: 9030 / 60,
          deepSleepTime: 6420 / 60,
          timeSpentInBed: 22380 / 60,
          totalSleepTime: 20730 / 60,
          REMSleepTime: 5280 / 60,
          totalAwakeTime: 1650 / 60,
          restlessSleep: 23,
          averageHRV: 46,
          averageRestingHR: 55.84,
          respiratoryRate: 16.375,
          temperatureDeviation: -0.37,
        },
        {
          name: "Mar-23",
          totalCalories: 3221,
          activeCalories: 1038,
          totalSteps: 14971,
          totalDistance: 16548,
          inactiveMinutes: 726,
          lowActiveMinutes: 226,
          mediumActiveMinutes: 38,
          highActiveMinutes: 69,
          lightSleepTime: 11070 / 60,
          deepSleepTime: 6450 / 60,
          timeSpentInBed: 24360 / 60,
          totalSleepTime: 22800 / 60,
          REMSleepTime: 5280 / 60,
          totalAwakeTime: 1560 / 60,
          restlessSleep: 28,
          averageHRV: 50,
          averageRestingHR: 56.14,
          respiratoryRate: 16.625,
          temperatureDeviation: -0.31,
        },
        {
          name: "Mar-24",
          totalCalories: 3815,
          activeCalories: 1621,
          totalSteps: 28051,
          totalDistance: 28338,
          inactiveMinutes: 562,
          lowActiveMinutes: 169,
          mediumActiveMinutes: 187,
          highActiveMinutes: 71,
          lightSleepTime: 8640 / 60,
          deepSleepTime: 5700 / 60,
          timeSpentInBed: 23880 / 60,
          totalSleepTime: 21210 / 60,
          REMSleepTime: 6870 / 60,
          totalAwakeTime: 2670 / 60,
          restlessSleep: 21,
          averageHRV: 52,
          averageRestingHR: 56.51,
          respiratoryRate: 15.75,
          temperatureDeviation: -0.25,
        },
        {
          name: "Mar-25",
          totalCalories: 3378,
          activeCalories: 1195,
          totalSteps: 15845,
          totalDistance: 19146,
          inactiveMinutes: 708,
          lowActiveMinutes: 237,
          mediumActiveMinutes: 36,
          highActiveMinutes: 68,
          lightSleepTime: 11850 / 60,
          deepSleepTime: 6240 / 60,
          timeSpentInBed: 26280 / 60,
          totalSleepTime: 24000 / 60,
          REMSleepTime: 5910 / 60,
          totalAwakeTime: 2280 / 60,
          restlessSleep: 20,
          averageHRV: 50,
          averageRestingHR: 54.86,
          respiratoryRate: 15.75,
          temperatureDeviation: -0.07,
        },
        {
          name: "Mar-26",
          totalCalories: 3252,
          activeCalories: 1111,
          totalSteps: 13306,
          totalDistance: 17191,
          inactiveMinutes: 718,
          lowActiveMinutes: 162,
          mediumActiveMinutes: 29,
          highActiveMinutes: 66,
          lightSleepTime: 11310 / 60,
          deepSleepTime: 6720 / 60,
          timeSpentInBed: 24780 / 60,
          totalSleepTime: 22530 / 60,
          REMSleepTime: 4500 / 60,
          totalAwakeTime: 2250 / 60,
          restlessSleep: 18,
          averageHRV: 45,
          averageRestingHR: 56.79,
          respiratoryRate: 16.5,
          temperatureDeviation: 0.19,
        },
        {
          name: "Mar-27",
          totalCalories: 3353,
          activeCalories: 1198,
          totalSteps: 28170,
          totalDistance: 22648,
          inactiveMinutes: 540,
          lowActiveMinutes: 147,
          mediumActiveMinutes: 258,
          highActiveMinutes: 0,
          lightSleepTime: 12090 / 60,
          deepSleepTime: 6480 / 60,
          timeSpentInBed: 31560 / 60,
          totalSleepTime: 26310 / 60,
          REMSleepTime: 7740 / 60,
          totalAwakeTime: 5250 / 60,
          restlessSleep: 29,
          averageHRV: 25,
          averageRestingHR: 65.58,
          respiratoryRate: 15.875,
          temperatureDeviation: 0.05,
        },
      ];
      break;
    default:
      break;
  }
  return Promise.resolve(result);
}
