import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import oilPressing from "@/assets/gallery/oil-pressing.jpg";
import factoryInterior from "@/assets/gallery/factory-interior.jpg";
import mustardSeeds from "@/assets/gallery/mustard-seeds.jpg";
import productRange from "@/assets/gallery/product-range.jpg";
import qualityControl from "@/assets/gallery/quality-control.jpg";
import cookingUse from "@/assets/gallery/cooking-use.jpg";

const galleryImages = [
  {
    src: oilPressing,
    title: "Traditional Kachi Ghani Process",
    category: "Production",
  },
  {
    src: factoryInterior,
    title: "Modern Manufacturing Facility",
    category: "Factory",
  },
  {
    src: mustardSeeds,
    title: "Premium Mustard Seeds",
    category: "Raw Materials",
  },
  {
    src: productRange,
    title: "Our Product Range",
    category: "Products",
  },
  {
    src: qualityControl,
    title: "Quality Testing Lab",
    category: "Quality Control",
  },
  {
    src: cookingUse,
    title: "Perfect for Indian Cooking",
    category: "Usage",
  },
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Behind the Scenes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Journey from
            <span className="text-primary"> Seed to Oil</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our state-of-the-art facility where tradition meets technology
            to bring you the purest Kachi Ghani mustard oil.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-mustard-light text-sm font-medium uppercase tracking-wider">
                  {image.category}
                </span>
                <h3 className="text-background text-xl font-display font-semibold mt-1">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl max-h-[80vh] mx-4 md:mx-20">
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-mustard-light text-sm font-medium uppercase tracking-wider">
                {galleryImages[activeIndex].category}
              </span>
              <h3 className="text-background text-xl md:text-2xl font-display font-semibold mt-1">
                {galleryImages[activeIndex].title}
              </h3>
              <p className="text-background/60 text-sm mt-2">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
