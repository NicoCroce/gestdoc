import { Express } from 'express';
import { UserRoutes } from '@server/domains/Users';
import { router, trpcExpress, createContext } from '../trpc';
import { AuthRoutes } from '@server/domains/Auth/Infrastructure/Routes';
import { DocumentsRoutes } from '@server/domains/Documents/Infrastructure/Routes';
import { DocumentsTypesRoutes } from '@server/domains/DocumentsTypes/Infraestructure';

const AllRouters = {
  ...UserRoutes,
  ...AuthRoutes,
  ...DocumentsRoutes,
  ...DocumentsTypesRoutes,
};

const MainRouter = router(AllRouters);

const InstanceMainRouter = (app: Express) => {
  app.use(
    '/api',
    trpcExpress.createExpressMiddleware({ router: MainRouter, createContext }),
  );
};

export type TMainRouter = typeof MainRouter;
export { InstanceMainRouter };
