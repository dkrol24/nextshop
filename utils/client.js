import sanityClient from "@sanity/client";
import config from "./config";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,

  apiVersion: "2022-12-12",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
