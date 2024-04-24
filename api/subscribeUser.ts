import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;

    console.log({ email });

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const AUDIENCE_ID: string = process.env.MAILCHIMP_AUDIENCE_ID || "";
    const API_KEY: string = process.env.MAILCHIMP_API_KEY || "";
    const DATACENTER: string = process.env.MAILCHIMP_API_SERVER || "";
    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.
        Hit me up amargarone@kw.com.com and I'll add you the old fashioned way :(.`,
      } as { error: string });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: (error as Error).message || Error.toString() });
  }
};
