import Image from "next/image";

export default function Home() {
  function handleFrom(){}
  return (
    <form>
      <label>name</label>
      <input className="border border-black"/>
      <label>experience</label>
      <input className="border border-black"/>
      <label>skills</label>
      <textarea className="border border-black"/>
    </form>
  );
}
