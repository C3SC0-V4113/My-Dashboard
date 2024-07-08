import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        title={20}
        subTitle="Productos en el carrito"
        href="/dashboard/counter"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
      />
    </div>
  );
};
