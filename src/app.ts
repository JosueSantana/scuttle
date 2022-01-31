var xhr = new XMLHttpRequest();
xhr.open("GET", "templates.html", true);
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return;

  const parser = new DOMParser();
  const templatesDoc = parser.parseFromString(this.responseText, "text/html");

  console.log(templatesDoc);
  
  const appEl = document.getElementById("app")!;

  const headerElement = templatesDoc.getElementById("header") as HTMLTemplateElement;
  const headerNode = document.importNode(headerElement.content, true);

  const footerElement = templatesDoc.getElementById("footer") as HTMLTemplateElement;
  const footerNode = document.importNode(footerElement.content, true);

  appEl.appendChild(headerNode);
  appEl.appendChild(footerNode);

};
xhr.send();
