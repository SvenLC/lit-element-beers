import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';
import { Router } from '../web_modules/@vaadin/router.js';
import { html, LitElement } from '../web_modules/lit-element.js';
import './beer-list.js';
import './beer-details.js';

class BeerMain extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return bootstrapStyle;
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/', component: 'beer-list' },
      { path: '/beers', component: 'beer-list' },
      { path: '/beer/:id', component: 'beer-details' },
      { path: '(.*)', component: 'beer-list' }
    ]);
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}

customElements.define('beer-main', BeerMain);
