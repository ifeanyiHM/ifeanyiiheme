import { useEffect, RefObject } from "react";

export function useScrollAnimation(
  refs: RefObject<HTMLElement>[],
  offset: number = 150
) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;

      refs.forEach((ref) => {
        if (ref.current) {
          const element = ref.current;
          const elementDistance = element.offsetTop;

          if (scrollDistance >= elementDistance - offset) {
            element.classList.add("show-animate");
          } else {
            element.classList.remove("show-animate");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs, offset]);
}
