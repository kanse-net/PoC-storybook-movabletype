import "../src/styles.css";
import template from "../mt-theme-block/themes/block/templates/main-header.mtml?raw";
import { processTemplate } from "./templateProcessor";

export default {
  title: "Components/MainHeader",
};

export const main = () => {
  return processTemplate(template);
};
