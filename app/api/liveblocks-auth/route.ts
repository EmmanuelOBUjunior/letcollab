import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret: "sk_dev_eaouNfBQPnVF8BRLe-mwtQ5lvO2cmjz-yAJixdGfGk3oxkMEqtMgHraA_cokDd1O",
});

export async function POST(request: Request) {
  // Get the current user from your database
  const user = __getUserFromDB__(request);

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}