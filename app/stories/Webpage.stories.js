import "../src/styles.css";
import template from "../mt-theme-block/themes/block/templates/webpage.mtml?raw";
import { processTemplate } from "./templateProcessor";

export default {
  title: "Pages/Webpage",
};

export const main = () => {
  return processTemplate(template);
};
