import findBeat from "./dateUtils";

describe("findBeat", () => {
  it("should return the correct beat name based on the ticket index and date", () => {
    const testCases = [
      { ticketIndex: 0, date: new Date(2025, 2, 1), expected: "Lower" },
      { ticketIndex: 0, date: new Date(2025, 2, 2), expected: "Middle" },
      { ticketIndex: 0, date: new Date(2025, 2, 3), expected: "Upper" },
      { ticketIndex: 0, date: new Date(2025, 2, 4), expected: "Lower" },
      { ticketIndex: 1, date: new Date(2025, 3, 1), expected: "Lower" },
      { ticketIndex: 1, date: new Date(2025, 3, 2), expected: "Middle" },
      { ticketIndex: 1, date: new Date(2025, 3, 3), expected: "Upper" },
      { ticketIndex: 1, date: new Date(2025, 3, 4), expected: "Lower" },
    ];

    testCases.forEach(({ ticketIndex, date, expected }) => {
      expect(findBeat(ticketIndex, date)).toBe(expected);
    });
  });
});

