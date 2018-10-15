import handlers from "./handlers";


const routes = {};

routes.root = handlers.root;
routes.check = handlers.check;
routes.details = handlers.details;
routes.receive = handlers.receive;

export default routes;
