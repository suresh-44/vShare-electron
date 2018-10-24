import handlers from "./handlers/index";


const routes = {};

routes.root = handlers.root;
routes.check = handlers.check;
routes.details = handlers.details;
routes.receive = handlers.receive;
routes.request = handlers.request;

export default routes;
