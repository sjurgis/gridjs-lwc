import { LightningElement } from "lwc";
import { Grid } from "./gridjs-development-es.js";

export default class Gridjs extends LightningElement {
  renderedCallback() {
    const div = this.template.querySelector("div.grid");
    new Grid({
      data: [
        ["Mike", 33, "mike@murphy.com"],
        ["John", 82, "john@conway.com"],
        ["Sara", 26, "sara@keegan.com"]
      ],
      search: true,
      pagination: {
        limit: 2
      },
      // sort: true,
      columns: ["Name", "Age", "Email"]
    }).render(div);
  }
}
