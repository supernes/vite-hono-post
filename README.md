### A simple example to show a potential issue with Hono's cloudflare-pages handler.

## 1. Build the frontend:

```
npm run build
```

## 2. Run the server:

```
npm run dev:wrangler
```

## 3. Test the request handelr:

```
curl -X POST http://localhost:4567/api/post
```

### The wrangler console will show an error:

> [ERROR] Your worker created multiple branches of a single stream (for instance, by calling `response.clone()` or `request.clone()`) but did not read the body of both branches. This is wasteful, as it forces the system to buffer the entire stream of data in memory, rather than streaming it through. This may cause your worker to be unexpectedly terminated for going over the memory limit. If you only meant to copy the request or response headers and metadata (e.g. in order to be able to modify them), use the appropriate constructors instead (for instance, `new Response(response.body, response)`, `new Request(request)`, etc).