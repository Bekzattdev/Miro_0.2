import { setupWorker } from "msw/browser";
import { boarsHandlers } from "./handlers/boards";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...authHandlers,...boarsHandlers);
