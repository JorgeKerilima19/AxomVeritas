import { ReactElement } from "react";

export type Service = {
  title: string;
  description: string;
  svg: ReactElement;
};
export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card p-2 border bg-transparent hover:bg-bg-primary border-primary rounded-4xl">
      <article className="bg-bg-primary hover:bg-primary text-gray-700 hover:text-gray-100 max-w-md grid place-items-center gap-12 p-12 rounded-4xl transition duration-300">
        {service.svg}
        <h3 className="text-3xl font-bold">{service.title}</h3>
        <span className="text-center">{service.description}</span>
      </article>
    </div>
  );
}
