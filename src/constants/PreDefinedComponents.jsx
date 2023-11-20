import SimpleComponent from "../components/blueprints/SimpleComponent";
import SupportComponent from "../components/blueprints/SupportComponent";

const preDefinedComponents = [
  {
    id: "cmp-simple",
    name: "Simple Component",
    component: <SimpleComponent />,
  },{
    id: "cmp-support",
    name: "Support Component",
    component: <SupportComponent />,
  },
];


export default preDefinedComponents;