import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
) => {
    console.log(`event body: ${JSON.stringify(event.body)}`);
    console.log(`context: ${JSON.stringify(context)}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};

export { handler };
