import Link from "next/link";

function page() {
  return (
    <ul className="h-screen xl:h-[50vh] flex flex-col justify-between sm:my-[5rem] xl:mt-[2rem] xl:mb-[0rem] px-[3.125rem] sm:px-[6.25rem] py-[4.375rem] sm:py-[7.5rem] xl:pt-[7rem] xl:pb-0">
      {/* <div className="flex-grow flex flex-col justify-between sm:my-[5rem] xl:mt-[2rem] xl:mb-[1rem] px-[3.125rem] sm:px-[6.25rem] py-[4.375rem] sm:py-[7.5rem] xl:pt-[7rem] xl:pb-0"> */}
      <li>
        <Link href="/">welcome</Link>
      </li>
      <li>
        <Link href="/about">background</Link>
      </li>
      <li>
        <Link href="/projects">projects</Link>
      </li>
      <li>
        <Link href="/contact">contact</Link>
      </li>
      {/* </div> */}
    </ul>
  );
}

export default page;
