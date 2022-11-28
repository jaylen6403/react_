/**
 * US Equity Market Trading Window
 * 1:00pm (13:00) to 9:00pm (21:00) UTC or
 * 9:00am to 5:00pm EST
 */
const UTC_MARKET_OPEN_HOUR = 13;
const UTC_MARKET_OPEN_MINUTE = 0;
export const UTC_MARKET_CLOSE_HOUR = 21;

const getMsTillUTCTime = (UTCHour: number, UTCMinute = 0) => {
  const now = new Date();
  const nowTime = now.getTime();
  const UTCMs = now.setUTCHours(UTCHour, UTCMinute, 0, 0);
  const msTillUTC = UTCMs - nowTime;
  return msTillUTC;
};

export const getMsTillUTCMarketClose = () => {
  return getMsTillUTCTime(UTC_MARKET_CLOSE_HOUR);
};

export const getMsTillUTCMarketOpen = () => {
  return getMsTillUTCTime(UTC_MARKET_OPEN_HOUR, UTC_MARKET_OPEN_MINUTE);
};
