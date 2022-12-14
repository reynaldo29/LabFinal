import {ProductRouter} from "../components";



// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/products",ProductRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
