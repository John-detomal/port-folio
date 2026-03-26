'use client';
import Button from '../ui/atoms/button';
import Image from 'next/image';
import infoData from '@/public/personal_info/info.json';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row gap-12 px-8 pt-20 pb-16 items-center overflow-hidden">
      {/* Image */}
      <div className="relative flex-1 flex justify-center lg:justify-end">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>

        <div className="relative z-10">
          <div className="relative w-[320px] h-[420px]">
            <Image
              src={infoData.avatar}
              alt={infoData.name}
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="z-10 flex-1 text-center lg:text-left max-w-xl">
        {/* Greeting */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
          <span className="text-2xl">👋</span>
          <span className="font-medium text-blue-700">Hi, I'm</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">{infoData.name}</h1>
        <p className="text-xl text-blue-700 font-medium mb-4">
          {infoData.title} • {infoData.years_of_experience}+ Years Experience
        </p>

        {/* Description */}
        <p className="text-blue-600 leading-relaxed mb-6">{infoData.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start text-blue-700 font-medium">
          {infoData.skills_highlight.map((skill) => (
            <span key={skill} className="px-3 py-1 border rounded-md bg-blue-100">
              {skill}
            </span>
          ))}
        </div>

        {/* Profile Links */}
        <div className="flex gap-4 mb-6 justify-center lg:justify-start text-blue-700 font-medium">
          {Object.entries(infoData.profiles).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-500 transition-colors"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ) : null,
          )}
        </div>

        {/* Availability */}
        {infoData.availability && (
          <p className="text-sm text-blue-600 font-medium mb-6">{infoData.availability}</p>
        )}

        {/* Actions */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button variant="secondary" label={{ text: 'Contact Me' }} />
          <Button variant="light" label={{ text: 'View Projects' }} />
        </div> */}

        {/* Contact Info */}
        <div className="flex gap-6 mt-6 justify-center lg:justify-start text-sm text-blue-600">
          {infoData.contact.email && <span>{infoData.contact.email}</span>}
          {infoData.contact.phone && <span>{infoData.contact.phone}</span>}
        </div>
      </div>
    </section>
  );
}
