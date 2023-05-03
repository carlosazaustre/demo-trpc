import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000",
		}),
	],
});

async function main() {
	const userList = await trpc.userList.query("Garaje");
	console.log(userList);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
