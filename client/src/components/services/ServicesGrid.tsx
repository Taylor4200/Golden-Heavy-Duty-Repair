import { Link } from "wouter";
import { 
  Truck, 
  Warehouse, 
  ClipboardCheck, 
  Disc, 
  Cpu, 
  Battery, 
  Caravan,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Mobile Truck Repair",
    description: "Our fully-equipped mobile service vehicles come to your location to get you back on the road fast.",
    icon: <Truck className="text-white h-8 w-8" />,
    linkText: "Request Service"
  },
  {
    title: "In-Shop Repair",
    description: "Our state-of-the-art facility is equipped to handle all truck repair and maintenance needs.",
    icon: <Warehouse className="text-white h-8 w-8" />,
    linkText: "Schedule Service"
  },
  {
    title: "DOT Inspections",
    description: "Comprehensive inspections to ensure your vehicles meet all Department of Transportation requirements.",
    icon: <ClipboardCheck className="text-white h-8 w-8" />,
    linkText: "Schedule Inspection"
  },
  {
    title: "Brake Service",
    description: "Complete brake system inspections, repairs, and replacements for all types of commercial trucks.",
    icon: <Disc className="text-white h-8 w-8" />,
    linkText: "Request Service"
  },
  {
    title: "Engine Diagnostics",
    description: "Advanced diagnostic equipment to quickly identify and resolve engine problems.",
    icon: <Cpu className="text-white h-8 w-8" />,
    linkText: "Schedule Diagnostics"
  },
  {
    title: "Battery Replacement",
    description: "Fast, reliable battery testing and replacement services to prevent unexpected breakdowns.",
    icon: <Battery className="text-white h-8 w-8" />,
    linkText: "Request Service"
  },
  {
    title: "Caravan Repair",
    description: "Complete trailer maintenance and repair services, including electrical systems and structural repairs.",
    icon: <Caravan className="text-white h-8 w-8" />,
    linkText: "Schedule Service"
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <div className="h-48 bg-primary flex items-center justify-center">
            {service.icon}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link 
              href="/contact" 
              className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center"
            >
              {service.linkText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
