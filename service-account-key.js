if (!process.env.GOOGLE_APPLICATION_ADMIN) {
  console.error("Missing environment setting GOOGLE_APPLICATION_ADMIN");
  process.exit(1);
}
const config = JSON.parse(process.env.GOOGLE_APPLICATION_ADMIN);
export default config;
