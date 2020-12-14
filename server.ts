import {
  serve,
  ServerRequest,
} from "https://deno.land/std@0.80.0/http/server.ts";
import { createJSONResponse, Router } from "./utils/handler.ts";

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
const router = new Router();

// routes working if only one, but JSON error if multiple routes and 404
for await (const req of server) {
  router.get("/", req, () => {
    const jsonHeaders = createJSONResponse();
    return {
      ...jsonHeaders,
      status: 200,
      body: JSON.stringify({ "msg": "index" }),
    };
  });
  router.get("/hello", req, () => {
    const jsonHeaders = createJSONResponse();
    return {
      ...jsonHeaders,
      status: 200,
      body: JSON.stringify({ "msg": "hello world" }),
    };
  });
  router.post("/sample-post", req, () => {
    return {
      status: 201,
      body: JSON.stringify({ "msg": "created" }),
    };
  });
}
