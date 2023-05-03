import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router, publicProcedure } from "./trpc";

const AppRouter = router({
	userList: publicProcedure
        .input(z.string())
        .query(async (options) => {
            const { input } = options;
            return Promise.resolve([
                { id: 1, name: "Jane" },
                { id: 2, name: "John" },
                { id: 3, name: input },
            ]);
	}),
});

export type AppRouter = typeof AppRouter;

const server = createHTTPServer({
	router: AppRouter,
});

server.listen(3000);
