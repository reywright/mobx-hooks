import { Count } from "./AppStore";
import { incrementCount } from "./utils";

describe("Count", () => {
  it("increments count", () => {
    const count = Count.create(
      {
        value: 5
      },
      {
        incrementCount
      }
    );
    count.increment();
    expect(count.value).toBe(6);
  });

  it("throws when given incorrect initial data", () => {
    expect(() => {
      Count.create({
        value: "hey"
      });
    }).toThrowError();
  });
});
