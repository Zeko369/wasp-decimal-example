import { Decimal } from "decimal.js";
import HttpError from "@wasp/core/HttpError.js";
import type { GetTasks } from "@wasp/queries/types";
import type { Task } from "@wasp/entities";

import "../shared/superjson.js";

//Using TypeScript's new 'satisfies' keyword, it will infer the types of the arguments and return value
export const getTasks = ((_args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.findMany({
    where: { user: { id: context.user.id } },
    orderBy: { id: "asc" },
  });
}) satisfies GetTasks<void, Task[]>;

export const getDecimal = () => {
  return new Decimal(10.123123);
};
