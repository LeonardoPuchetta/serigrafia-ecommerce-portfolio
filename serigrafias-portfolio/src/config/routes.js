import LayoutBasic from './../layouts/LayoutBasic';
import Inicio from './../pages/Inicio'
import Remeras from './../pages/Remeras/Remeras';
import Parches from './../pages/Parches';
import Laminas from './../pages/Laminas';



const routes =[
    {
        path: "/",
        layout : LayoutBasic,
        component : Inicio
    },
    {
        path: "/remeras",
        layout : LayoutBasic,
        component : Remeras
    },
    {
        path: "/laminas",
        layout : LayoutBasic,
        component : Laminas
    },
    {
        path: "/parches",
        layout : LayoutBasic,
        component : Parches
    }


]

export default routes ;