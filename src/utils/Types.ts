import { StaticImageData } from "next/image";

export type Animal = {
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  p3: string;
  h4?: string;
  p4?: string;
};

type Recipes = {
  name: string;
  url: string;
};
export type Product = {
  name: string;
  price: string;
  description?: string;
  recipes?: Recipes[];
  image?: StaticImageData;
};
