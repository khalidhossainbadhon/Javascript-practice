const api = true;

if (api) {
  throw new Error("API is running");
}

try {
  ("Hello world!s");
} catch (error) {}
