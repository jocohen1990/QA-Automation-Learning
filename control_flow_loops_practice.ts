// If / Else version

// typed array of strings
const testNames: string[] = [
  "Login flow",
  "User registration",
  "Password reset",
  "Profile update",
  "Logout"
];

for (const test of testNames) {
  // explicitly typed as boolean
  const passed: boolean = Math.random() >= 0.5;

  if (passed) {
    console.log(`${test}: passed`);
  } else {
    console.log(`${test}: failed`);
  }
}

// Bonus: Switch version
// union type — result can only be one of these three
/* type TestResult = "passed" | "failed" | "skipped";

const testNames: string[] = [
  "Login flow",
  "User registration",
  "Password reset",
  "Profile update",
  "Logout"
];

const outcomes: TestResult[] = ["passed", "failed", "skipped"];

for (const test of testNames) {
  const result: TestResult =
    outcomes[Math.floor(Math.random() * 3)];

  switch (result) {
    case "passed":
      console.log(`${test}: passed ✓`);
      break;
    case "failed":
      console.log(`${test}: failed ✗`);
      break;
    case "skipped":
      console.log(`${test}: skipped —`);
      break;
  }
} */