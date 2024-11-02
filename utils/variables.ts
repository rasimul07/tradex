const { env } = process as { env: { [key: string]: string } };
export const {
  CLOUD_KEY,
  CLOUD_NAME,
  CLOUD_SECRET,
} = env;
