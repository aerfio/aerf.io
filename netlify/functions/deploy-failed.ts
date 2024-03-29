import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  console.log(`event body: ${JSON.stringify(event.body)}`);
  console.log(`context: ${JSON.stringify(context)}`);
  await fetch("https://ntfy.sh", {
    method: "POST",
    body: JSON.stringify({
      topic: process.env.TOPIC_NAME,
      title: "Deploy to netlify failed",
      message: "Newest deploy failed",
      tags: ["facepalm"],
      priority: 2,
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

export { handler };
