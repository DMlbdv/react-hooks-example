import { getName, findMinMax, zeroCondition } from "./index";

const mockId = Math.floor(Math.random() * 10);
const mockTitle = "City";
const mockList = [{ id: mockId, title: mockTitle }];
const mockErrList = [{ mockId }];

const mockModel = [
    ["", 0],
    ["", 8],
    ["", 2]
];

it("should get title by id", () => {
    expect(getName(mockList, mockId)).toEqual(mockTitle);
});
it("should return an Error when one of the args. missed", () => {
    expect(() => getName(mockErrList, mockId)).toThrow();
});
it("return the same value for min/max if model.length = 1", () => {
    expect(findMinMax([["", mockId]])).toEqual({ max: mockId, min: mockId });
});
it("should return an obj. with min. max. values", () => {
    expect(findMinMax(undefined)).toEqual(zeroCondition);
    expect(findMinMax([])).toEqual(zeroCondition);
});
