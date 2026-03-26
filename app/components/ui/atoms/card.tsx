interface Props {
  title: string;
  description: string;
  stack: Array<string>;
}
export default function Card() {
  <div className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
    <h3 className="text-xl font-bold text-blue-700 mb-2">Portfolio Website</h3>
    <p className="text-blue-600 text-sm mb-4">
      Personal portfolio showcasing projects, skills, and freelance work experience.
    </p>
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">React</span>
      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">TailwindCSS</span>
      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">
        Framer Motion
      </span>
    </div>
  </div>;
}
