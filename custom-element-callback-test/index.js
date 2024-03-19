document.getElementById("add").onclick = () => {
    const el = document.createElement("my-element");
    document.body.appendChild(el);
  };
  
  document.getElementById("update").onclick = () => {
    const el = document.getElementsByTagName("my-element")[0];
    el.setAttribute("date", `${Date.now()}`);
  };
  
  document.getElementById("delete").onclick = () => {
    const el = document.getElementsByTagName("my-element")[0];
    el.remove();
  };
  
  class MyElement extends HTMLElement {
    constructor() {
      super();
      console.log("constructor");
      this.render();
    }
  
    connectedCallback() {
      console.log("connectedCallback");
    }
  
    static get observedAttributes() {
      return ["date"]; // attributeChangedCallbackのために必要
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log("attributeChangedCallback", { name, oldValue, newValue });
    }
  
    disconnectedCallback() {
      console.log("disconnectedCallback");
    }
  
    adoptedCallback() {
      console.log("adoptedCallback");
    }
  
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.innerHTML = "<b>My Element</b>";
      shadow.appendChild(div);
    }
  }
  
  customElements.define("my-element", MyElement);
  