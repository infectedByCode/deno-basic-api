import {
  serve,
  ServerRequest,
} from "https://deno.land/std@0.80.0/http/server.ts";

export class Router {
  get(url: string, req: ServerRequest, res: Function) {
    if (req.url === url && req.method === "GET") {
      req.respond(res());
    }
  }
  post(url: string, req: ServerRequest, res: Function) {
    if (req.url === url && req.method === "POST") {
      req.respond(res());
    }
  }
}

export const createJSONResponse = () => {
  const request = new ServerRequest();
  request.headers = new Headers();
  request.headers.set("content-type", "application/json");
  return request;
};
