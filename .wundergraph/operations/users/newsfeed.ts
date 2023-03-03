// .wundergraph/operations/users/newsfeed.ts
import { createOperation, z } from "../../generated/wundergraph.factory";

export default createOperation.subscription({
  input: z.object({
    id: z.string(),
  }),
  response: z.object({
    user: z.object({
      id: z.string(),
      name: z.string(),
      bio: z.string(),
    }),
  }),
  handler: async function* ({ input }) {
    try {
      const userPromise = Promise.resolve({
        id: input.id,
        name: "Jens",
        bio: "Founder of WunderGraph",
        updatedAt: new Date().toISOString(),
      });
      const postsPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: input.id,
              title: "WunderGraph is awesome",
              content: "WunderGraph is awesome",
              updatedAt: new Date().toISOString(),
            },
          ]);
        }, 3000);
      });
      //   const [user, posts] = await Promise.all([userPromise, postsPromise]);
      // next, await the result of the userPromise and yield it
      yield {
        user: await userPromise,
        posts: [],
      };
      // finally, we wait for the postsPromise and yield the full result
      yield {
        user: await userPromise,
        posts: await postsPromise,
        // abdo: "hello Abdo",
      };
    } finally {
      console.log("Client disconnected");
    }
  },
});
