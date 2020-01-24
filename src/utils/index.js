/**
 * @param  {array} list
 * @param  {number} id
 */
export const getName = (list, id) => {
    const { title } = list.find(item => item.id === id);
    return title;
};

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
        { min: null, max: null }
    );

/**
 * @param  {array} series
 */
export const sortTimeSeries = (series = []) => {
    return series.sort(
        ([time1], [time2]) =>
            new Date(time1).getTime() - new Date(time2).getTime()
    );
};
