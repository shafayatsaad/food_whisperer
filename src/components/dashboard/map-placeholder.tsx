
import Image from "next/image";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Map } from "lucide-react";

export function MapPlaceholder() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-placeholder');

  return (
    <div className="rounded-lg border border-white/10 bg-card/50 text-card-foreground shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <CardHeader>
        <CardTitle className="font-headline">Live Rescue Map</CardTitle>
        <CardDescription>
          Real-time view of all active rescues, donations, and volunteer status.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border">
          {mapImage ? (
             <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-muted h-full w-full"></div>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
              <Map className="h-16 w-16 text-muted-foreground" />
              <p className="mt-4 font-semibold text-foreground">Live Map Placeholder</p>
              <p className="text-sm text-muted-foreground">Integration with a map service is required.</p>
          </div>
        </div>
      </CardContent>
    </div>
  );
}
