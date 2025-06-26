"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50" id="gallery" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-heading" className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See examples of our quality workmanship and attention to detail across various home improvement projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="group" aria-label="Project category filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter projects by ${category} category`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Project gallery">
          {filteredImages.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-500"
              role="listitem"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.description} by AppyHandy professional handyman services`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
}