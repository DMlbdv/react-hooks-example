export type timeStamp = [string, number];

export default interface CityInfo {
      id: number,
      status: string,
      timeseries: timeStamp[]
    }

