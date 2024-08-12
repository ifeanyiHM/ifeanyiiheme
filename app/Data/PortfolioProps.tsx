import { Dispatch, SetStateAction } from "react";

export interface PortfolioContextProps {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
}

export const defaultPortfolioProps: PortfolioContextProps = {
  lightMode: true,
  setLightMode: () => {},
};

// export interface submittedProfileProps {
//   firstName: string;
//   lastName: string;
//   email: string;
//   imageFile: string;
// }

// export interface dropDownListProps {
//   name: string;
//   value: string;
//   src: string;
//   color: string;
// }
