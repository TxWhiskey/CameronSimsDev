import type { User } from "@prisma/client";
import { DataClient } from "../util/data-client";

export const userClient = new DataClient<User>('user')