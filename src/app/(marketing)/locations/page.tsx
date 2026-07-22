import { MapPin, Phone, Clock } from "lucide-react";
import { offices } from "@/lib/content/offices";

export const metadata = { title: "Locations" };

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-4xl">Our Offices</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Both offices accept walk-ins by appointment. Portal clients can also
        message their attorney directly instead of calling.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {offices.map((office) => (
          <div key={office.name} className="rounded-sm border border-border p-6">
            <h2 className="font-display text-xl">{office.name}</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {office.address}
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {office.phone}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {office.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
