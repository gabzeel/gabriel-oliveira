import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { VisuallyHidden } from "radix-ui";

interface TimelineImageGridProps {
  images: ImageMetadata[];
}

export function TimelineImageGrid({ images }: TimelineImageGridProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={
          images.length === 1
            ? "grid grid-cols-1 gap-2"
            : images.length === 2
              ? "grid grid-cols-2 gap-2"
              : "grid grid-cols-3 gap-2"
        }
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleOpen(index)}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-border outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <img
              src={image.src}
              alt={`Project screenshot ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              sizes={
                images.length === 1
                  ? "100vw"
                  : images.length === 2
                    ? "50vw"
                    : "33vw"
              }
            />
            <div className="absolute inset-0 bg-foreground/0 transition-colors duration-200 group-hover:bg-foreground/5" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-3xl sm:max-w-3xl p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-sm"
          showCloseButton
        >
          <VisuallyHidden.Root>
            <DialogTitle>Image preview</DialogTitle>
          </VisuallyHidden.Root>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-video w-full">
              <img
                src={images[activeIndex]?.src}
                alt={`Project screenshot ${activeIndex + 1}`}
                className="h-full w-full object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 py-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    index === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
