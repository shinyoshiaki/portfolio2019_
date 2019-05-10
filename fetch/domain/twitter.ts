import Twitter from "twitter";
import { twitterAccount } from "../../enviroment";

const client = new Twitter(twitterAccount);

export const getProfile = async () => {
  const profile = await client.get("users/show.json", {
    screen_name: "shinyoshiaki"
  });
  if (profile) {
    console.log({ profile });
    return {
      desc: profile.description,
      img: (profile.profile_image_url_https as string).replace(
        /normal/g,
        "200x200"
      )
    };
  } else return undefined;
};
