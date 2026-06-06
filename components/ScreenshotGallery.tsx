import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export default function ScreenshotGallery({
  title,
  screenshots,
}: {
  title: string;
  screenshots: Screenshot[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {screenshots.map((screenshot) => (
          <figure key={screenshot.src} className="overflow-hidden rounded-lg">
            <div className="relative aspect-video bg-neutral-100">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-neutral-500">
              {screenshot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
