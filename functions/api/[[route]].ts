import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'


const api = new Hono().basePath('/api');

api.post("/post", async (ctx) => {
    return ctx.json({ status: "ok" });
})

export const onRequest = handle(api);