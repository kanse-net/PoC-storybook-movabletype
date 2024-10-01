const mtTagRegex = /<mt:.*?>|<\/mt:.*?>|<mt:.*?\/>/g;
const blockTagRegex = /<mt:.*?>|<\/mt:.*?>/gs;
const functionTagRegex = /<mt:.*?\/>/gs;

function wrapBlockTags(template) {
  return template.replace(blockTagRegex, (match) => {
    return `<div style="background-color:skyblue">${match}</div>`;
  });
}

function wrapFunctionTags(template) {
  return template.replace(functionTagRegex, (match) => {
    return `<span style="background-color:seagreen">${match}</span>`;
  });
}

export function processTemplate(template) {
  let modifiedTemplate = template;
  modifiedTemplate = wrapBlockTags(modifiedTemplate);
  modifiedTemplate = wrapFunctionTags(modifiedTemplate);
  modifiedTemplate = modifiedTemplate.replace(mtTagRegex, (match) => {
    return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  });
  return modifiedTemplate;
}
