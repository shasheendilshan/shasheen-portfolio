import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "euj0lh7k",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skp43OcZOJGOriz52PMVcJMDH231DqR0CbSD12IDyk2u1dVtkUuDlEpmHA2S7lRBWgNfvhWFesjnpTWR5NESeIJihAaRXZbkdYMONex3bAWtL1143Set23yn5dj2uSTNAPrJGIZnWV5pwSSxYJAmuSFF8MghIgVcc59GfoEfwHUPg6U96rF9",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
