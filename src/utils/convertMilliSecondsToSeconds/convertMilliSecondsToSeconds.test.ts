import {convertMilliSecondsToSeconds} from "./convertMilliSecondsToSeconds"


describe('convertSeconds', () => {
    test("Корректное значение при 0", () => {
        expect(convertMilliSecondsToSeconds(0)).toBe("0:0:0");
    })
    test("Корректное значение без секунд", () => {
        expect(convertMilliSecondsToSeconds(56)).toBe("0:0:56");
        expect(convertMilliSecondsToSeconds(99)).toBe("0:0:99");
    })
    test("Корректное значение без минут", () => {
        expect(convertMilliSecondsToSeconds(1242)).toBe("0:12:42");
    })
    test("Корректное значение с минутами", () => {
        expect(convertMilliSecondsToSeconds(39242)).toBe("6:32:42");
    })
})
