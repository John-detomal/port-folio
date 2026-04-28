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
            {company.url ? (
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-blue-900 underline"
              >
                {company.name}
              </a>
            ) : (
              <h2 className="text-2xl font-bold text-blue-900">{company.name}</h2>
            )}

            {company.role && (
              <p className="text-blue-800 italic mt-1">
                {company.role} {company.duration.start} - {company.duration.end}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.projects.map((project, idx) => (
              <div
                key={`${company.name}-${project.name}-${idx}`}
                className="bg-white rounded-xl shadow-md border border-blue-200 flex flex-col overflow-hidden"
              >
                {/* IMAGE SLIDER */}
                {project.images.length > 0 && (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="relative h-64 md:h-80 w-full"
                  >
                    {project.images.map((img, iidx) => (
                      <SwiperSlide key={iidx}>
                        <div
                          className="relative w-full h-64 md:h-80 cursor-pointer"
                          onClick={() => setLightbox({ open: true, src: img })}
                        >
                          <Image
                            src={img.startsWith('/') ? img : `/${img}`}
                            alt={`${project.name} screenshot ${iidx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                {/* CONTENT */}
                <div className="p-6 flex flex-col gap-4">
                  {/* TITLE */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-blue-800 underline"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <p className="text-xl font-bold text-blue-800">{project.name}</p>
                  )}

                  {/* OVERVIEW */}
                  <p className="text-blue-700 text-sm">{project.overview}</p>

                  {/* METRICS (🔥 HIGH IMPACT) */}
                  {project.metrics && Object.keys(project.metrics).length > 0 && (
                    <div className="bg-blue-50 p-3 rounded-md text-xs text-blue-900">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <p key={key}>
                          <strong>{key.replace('_', ' ')}:</strong> {value}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* FEATURES */}
                  {project.features?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">Features</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ARCHITECTURE */}
                  {project.architecture?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">Architecture</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700">
                        {project.architecture.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* RESPONSIBILITIES */}
                  {project.responsibilities?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">Responsibilities</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700">
                        {project.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* STACK */}
                  {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
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

      {/* LIGHTBOX */}
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
