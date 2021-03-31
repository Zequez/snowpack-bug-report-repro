console.log(import.meta.env.MODE);

if (import.meta.env.MODE === "development") {
  console.log("This should have been removed on the build");
} else if (import.meta.env.MODE === "production") {
  console.log("This runs on production");
}

console.log("This runs always");
