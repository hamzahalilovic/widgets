import dayWeatherIcons from "../assets/dayIcons";
import nightWeatherIcons from "../assets/nightIcons";

const dayIconsMap = {
  1000: dayWeatherIcons.sunny,
  1003: dayWeatherIcons.partlyCloudy,
  1006: dayWeatherIcons.cloudy,
  1009: dayWeatherIcons.overcast,
  1030: dayWeatherIcons.mist,
  1063: dayWeatherIcons.patchyRainPossible,
  1066: dayWeatherIcons.patchySnowPossible,
  1069: dayWeatherIcons.patchySleetPossible,
  1072: dayWeatherIcons.patchyFreezingDrizzlePossible,
  1087: dayWeatherIcons.thunderyOutbreaksPossible,
  1114: dayWeatherIcons.blowingSnow,
  1117: dayWeatherIcons.blizzard,
  1135: dayWeatherIcons.fog,
  1147: dayWeatherIcons.freezingFog,
  1150: dayWeatherIcons.patchyLightDrizzle,
  1153: dayWeatherIcons.lightDrizzle,
  1168: dayWeatherIcons.freezingDrizzle,
  1171: dayWeatherIcons.heavyFreezingDrizzle,
  1180: dayWeatherIcons.patchyLightRain,
  1183: dayWeatherIcons.lightRain,
  1186: dayWeatherIcons.moderateRainAtTimes,
  1189: dayWeatherIcons.moderateRain,
  1192: dayWeatherIcons.heavyRainAtTimes,
  1195: dayWeatherIcons.heavyRain,
  1198: dayWeatherIcons.lightFreezingRain,
  1201: dayWeatherIcons.moderateOrHeavyFreezingRain,
  1204: dayWeatherIcons.lightSleet,
  1207: dayWeatherIcons.moderateOrHeavySleet,
  1210: dayWeatherIcons.patchyLightSnow,
  1213: dayWeatherIcons.lightSnow,
  1216: dayWeatherIcons.patchyModerateSnow,
  1219: dayWeatherIcons.moderateSnow,
  1222: dayWeatherIcons.patchyHeavySnow,
  1225: dayWeatherIcons.heavySnow,
  1237: dayWeatherIcons.icePellets,
  1240: dayWeatherIcons.lightRainShower,
  1243: dayWeatherIcons.moderateOrHeavyRainShower,
  1246: dayWeatherIcons.torrentialRainShower,
  1249: dayWeatherIcons.lightSleetShowers,
  1252: dayWeatherIcons.moderateOrHeavySleetShowers,
  1255: dayWeatherIcons.lightSnowShowers,
  1258: dayWeatherIcons.moderateOrHeavySnowShowers,
  1261: dayWeatherIcons.lightShowersOfIcePellets,
  1264: dayWeatherIcons.moderateOrHeavyShowersOfIcePellets,
  1273: dayWeatherIcons.patchyLightRainWithThunder,
  1276: dayWeatherIcons.moderateOrHeavyRainWithThunder,
  1279: dayWeatherIcons.patchyLightSnowWithThunder,
  1282: dayWeatherIcons.moderateOrHeavySnowWithThunder,
};

const nightIconsMap = {
  1000: nightWeatherIcons.sunny,
  1003: nightWeatherIcons.partlyCloudy,
  1006: nightWeatherIcons.cloudy,
  1009: nightWeatherIcons.overcast,
  1030: nightWeatherIcons.mist,
  1063: nightWeatherIcons.patchyRainPossible,
  1066: nightWeatherIcons.patchySnowPossible,
  1069: nightWeatherIcons.patchySleetPossible,
  1072: nightWeatherIcons.patchyFreezingDrizzlePossible,
  1087: nightWeatherIcons.thunderyOutbreaksPossible,
  1114: nightWeatherIcons.blowingSnow,
  1117: nightWeatherIcons.blizzard,
  1135: nightWeatherIcons.fog,
  1147: nightWeatherIcons.freezingFog,
  1150: nightWeatherIcons.patchyLightDrizzle,
  1153: nightWeatherIcons.lightDrizzle,
  1168: nightWeatherIcons.freezingDrizzle,
  1171: nightWeatherIcons.heavyFreezingDrizzle,
  1180: nightWeatherIcons.patchyLightRain,
  1183: nightWeatherIcons.lightRain,
  1186: nightWeatherIcons.moderateRainAtTimes,
  1189: nightWeatherIcons.moderateRain,
  1192: nightWeatherIcons.heavyRainAtTimes,
  1195: nightWeatherIcons.heavyRain,
  1198: nightWeatherIcons.lightFreezingRain,
  1201: nightWeatherIcons.moderateOrHeavyFreezingRain,
  1204: nightWeatherIcons.lightSleet,
  1207: nightWeatherIcons.moderateOrHeavySleet,
  1210: nightWeatherIcons.patchyLightSnow,
  1213: nightWeatherIcons.lightSnow,
  1216: nightWeatherIcons.patchyModerateSnow,
  1219: nightWeatherIcons.moderateSnow,
  1222: nightWeatherIcons.patchyHeavySnow,
  1225: nightWeatherIcons.heavySnow,
  1237: nightWeatherIcons.icePellets,
  1240: nightWeatherIcons.lightRainShower,
  1243: nightWeatherIcons.moderateOrHeavyRainShower,
  1246: nightWeatherIcons.torrentialRainShower,
  1249: nightWeatherIcons.lightSleetShowers,
  1252: nightWeatherIcons.moderateOrHeavySleetShowers,
  1255: nightWeatherIcons.lightSnowShowers,
  1258: nightWeatherIcons.moderateOrHeavySnowShowers,
  1261: nightWeatherIcons.lightShowersOfIcePellets,
  1264: nightWeatherIcons.moderateOrHeavyShowersOfIcePellets,
  1273: nightWeatherIcons.patchyLightRainWithThunder,
  1276: nightWeatherIcons.moderateOrHeavyRainWithThunder,
  1279: nightWeatherIcons.patchyLightSnowWithThunder,
  1282: nightWeatherIcons.moderateOrHeavySnowWithThunder,
};

export const getDayIcon = (name) => {
  if (dayIconsMap[name]) {
    return dayIconsMap[name];
  }
  return dayWeatherIcons.sunny;
};

export const getNightIcon = (name) => {
  if (nightIconsMap[name]) {
    return nightIconsMap[name];
  }
  return nightWeatherIcons.sunny;
};