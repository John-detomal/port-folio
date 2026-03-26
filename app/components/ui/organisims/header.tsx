export default function Header() {
  return (
    <div className="flex justify-between pb-2.5 items-center">
      <ul className="rounded-full shadow-slate-400 shadow-sm bg-slate-200 flex gap-8 list-none py-2 px-10 text-sm">
        <li className=" font-bold">Home</li>
        <li className=" font-bold">Home</li>
        <li className=" font-bold">Home</li>
      </ul>
      <div className="flex gap-1">
        <h4>John Lloyd Detomal</h4> |
        <h6 className="text-thin text-gray-300">Full stack Developer</h6>
      </div>
    </div>
  );
}
