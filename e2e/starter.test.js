describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should tap on button by id and expect some text to be visible", async () => {
    await expect(element(by.text("Welcome!"))).toBeVisible();
  });
});
