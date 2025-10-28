describe("Home Screen Tests", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should show welcome message", async () => {
    await expect(element(by.id("welcomeTitle"))).toBeVisible();
  });

  it("should show step 1 section", async () => {
    await expect(element(by.id("step1Title"))).toBeVisible();
  });

  it("should show step 3 section", async () => {
    await expect(element(by.id("step3Title"))).toBeVisible();
  });
});
