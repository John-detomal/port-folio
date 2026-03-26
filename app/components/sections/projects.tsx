'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Info from '../ui/atoms/info';
import Stack from '../ui/atoms/stack';
import experience from '@/public/experience/experience.json';

export default function ProjectsSection() {
  const companies = experience.companies;
  const [lightbox, setLightbox] = useState<{ open: boolean; src: string }>({
    open: false,
    src: '',
  });

  return (
    <section className="px-8 py-16 bg-blue-50 rounded-t-[25px]">
      <Info
        classNames="text-center mb-12"
        size="md"
        label={{ text: 'Projects & Tech Stack', color: 'info' }}
      />

      {companies.map((company) => (
        <div key={company.name} className="mb-16">
          <div className="bg-blue-100 px-6 py-4 rounded-lg mb-6 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900">{company.name}</h2>
            {company.role && <p className="text-blue-800 italic mt-1">{company.role}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {company.projects.map((project, idx) => (
              <div
                key={`${company.name}-${project.name}-${idx}`}
                className="bg-white rounded-xl shadow-md border border-blue-200 flex flex-col hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
              >
                {project.images.length > 0 && (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    spaceBetween={0}
                    slidesPerView={1}
                    className="relative h-64 md:h-80 w-full" // increased height
                  >
                    {project.images.map((img, iidx) => (
                      <SwiperSlide key={iidx}>
                        <div
                          className="relative w-full h-64 md:h-80 cursor-pointer" // match Swiper height
                          onClick={() => setLightbox({ open: true, src: img })}
                        >
                          <Image
                            src={img.startsWith('/') ? img : `/${img}`}
                            alt={`${project.name} screenshot ${iidx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px" // higher size for better resolution
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{project.name}</h3>
                  <p className="text-blue-700 text-sm mb-4 flex-1">{project.overview}</p>

                  {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.stack.map((tech, sidx) => (
                        <Stack
                          key={`${tech}-${sidx}`}
                          size="sm"
                          label={{
                            text: tech.charAt(0).toUpperCase() + tech.slice(1),
                            color: 'info',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox({ open: false, src: '' })}
        >
          <div className="relative w-[90%] max-w-4xl h-[90%]">
            <Image
              src={lightbox.src.startsWith('/') ? lightbox.src : `/${lightbox.src}`}
              alt="Project Screenshot"
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
