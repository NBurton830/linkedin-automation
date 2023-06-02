const { Builder } = require('selenium-webdriver');

async function openLinkedIn() {
  // Create a new WebDriver instance for Chrome
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open LinkedIn.com
    await driver.get('https://www.linkedin.com');
    console.log('LinkedIn opened successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Quit the WebDriver session
    await driver.quit();
  }
}

openLinkedIn();
