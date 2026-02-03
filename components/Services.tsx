import {
  AppSvg,
  WebSvg,
  SeoSvg,
  ArrowRightSvg,
  DotSvg,
  LineSvg,
} from "@/public/assets";
import { ServiceCard } from "./subcomponents/ServiceCard";

const services = [
  {
    title: "Web Design",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    svg: <WebSvg />,
  },
  {
    title: "App Development",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    svg: <AppSvg />,
  },
  {
    title: "SEO Optimization",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    svg: <SeoSvg />,
  },
  {
    title: "SEO Optimization2",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    svg: <SeoSvg />,
  },
];

export const Services = () => {
  return (
    <section className="px-8 py-32">
      <div className="flex gap-4 flex-col items-center justify-center">
        <div className="flex items-center">
          <ArrowRightSvg />
          <h3 className="text-2xl font-bold text-primary">
            Nuestros Servicios
          </h3>
        </div>
        <div className="grid">
          <h2 className="text-5xl font-bold text-primary">
            Soluciones que proveemos
          </h2>
          <div className="flex ml-auto items-center justify-center gap-2">
            <LineSvg />
            <DotSvg />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-12 items-center justify-center mt-16">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};
