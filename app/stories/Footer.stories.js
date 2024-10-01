import "../src/styles.css";
import template from "../mt-theme-block/themes/block/templates/footer.mtml?raw";
import { processTemplate } from "./templateProcessor";

export default {
  title: "Components/Footer",
};

export const main = () => {
  return processTemplate(template);
};
