import ListItem from "../types/list-item";
import CityInfo, {timeStamp} from "../types/city-info";

/**
 * @param  {array} list
 * @param  {number} id
 */
export const getName = (list: ListItem[], id: string): string => {
    try {
        const { title } = list.find(item => item.id === id);
        return title;
    } catch (error) {
        throw new Error('Check args. provided to "getName" function');
    }
};

export const zeroCondition = { min: null, max: null };

/**
 * @param  {array} arr // for the sake of the test task: O(n).
 */
export const findMinMax = (arr = []) =>
    arr.reduce(
        (acc, it) => {
            const [, val] = it;
            const { min, max } = acc;

            if (!min) return { min: val, max: val };

            return {
                ...acc,
                min: val < min ? val : min,
                max: val > max ? val : max
            };
        },
        zeroCondition
    );

/**
 * @param  {array} series
 */
export const sortTimeSeries = (series: timeStamp[] = []): timeStamp[] => {
    return series.sort(
        ([time1], [time2]) =>
            new Date(time1).getTime() - new Date(time2).getTime()
    );
};
