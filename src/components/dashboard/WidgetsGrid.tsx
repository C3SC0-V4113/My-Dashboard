"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/hooks";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        title={count}
        subTitle="Productos agregados"
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
      />
    </div>
  );
};
