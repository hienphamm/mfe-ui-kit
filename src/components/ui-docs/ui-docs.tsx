import {Component, h, State} from '@stencil/core';

@Component({
  tag: 'ui-docs',
  styleUrl: 'styles.css',
  shadow: true,
})
export class UiDocs {
  @State() showModal: boolean = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  };

  render() {
    return (
      <div class="p-8 max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8">UI Components Documentation</h1>

        {/* UI Button Documentation */}
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">UI Button</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Props</h3>
            <table class="min-w-full mb-6">
              <thead>
              <tr class="border-b">
                <th class="text-left py-2">Prop</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Description</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b">
                <td class="py-2">label</td>
                <td class="py-2">string</td>
                <td class="py-2">-</td>
                <td class="py-2">Button text</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">variant</td>
                <td class="py-2">'default' | 'primary' | 'secondary'</td>
                <td class="py-2">'default'</td>
                <td class="py-2">Button style variant</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">disabled</td>
                <td class="py-2">boolean</td>
                <td class="py-2">false</td>
                <td class="py-2">Disables the button</td>
              </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-medium mb-3">Examples</h3>
            <div class="flex flex-wrap gap-4 mb-6">
              <ui-button label="Default Button"/>
              <ui-button label="Primary" variant="primary">
                <span slot="icon-left" class="icon-class">★</span>
                <span slot="icon-right">★</span>
              </ui-button>
              <ui-button label="Secondary" variant="secondary"/>
              <ui-button label="Disabled" disabled={true}/>
            </div>

            <h3 class="text-xl font-medium mb-3">Usage</h3>
            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
{`<ui-button
  label="Click me"
  variant="primary"
  onClick={() => console.log('Clicked!')}
/>`}
              </code>
            </pre>
          </div>
        </section>

        {/* UI Card Documentation */}
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">UI Card</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Props</h3>
            <table class="min-w-full mb-6">
              <thead>
              <tr class="border-b">
                <th class="text-left py-2">Prop</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Description</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b">
                <td class="py-2">heading</td>
                <td class="py-2">string</td>
                <td class="py-2">-</td>
                <td class="py-2">Card title</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">image</td>
                <td class="py-2">string</td>
                <td class="py-2">-</td>
                <td class="py-2">Image URL</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">shadow</td>
                <td class="py-2">'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'</td>
                <td class="py-2">'md'</td>
                <td class="py-2">Shadow size</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">hoverEffect</td>
                <td class="py-2">boolean</td>
                <td class="py-2">false</td>
                <td class="py-2">Enables hover effects</td>
              </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-medium mb-3">Examples</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ui-card
                heading="Basic Card"
                description="This is a simple card example"
              />
              <ui-card
                heading="Card with Image"
                description="Hover effect enabled"
                image="https://via.placeholder.com/400x200"
                hover-effect
                shadow="lg"
              >
                <div slot="actions">
                  <ui-button variant="primary" label="Action"/>
                </div>
              </ui-card>
            </div>

            <h3 class="text-xl font-medium mb-3">Usage</h3>
            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
{`<ui-card
  heading="Product Card"
  description="This product is amazing"
  image="/product.jpg"
  shadow="lg"
  hover-effect
>
  <div slot="actions">
    <ui-button variant="primary" label="Buy Now" />
  </div>
</ui-card>`}
              </code>
            </pre>
          </div>
        </section>

        {/* UI Modal Documentation */}
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">UI Modal</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Props</h3>
            <table class="min-w-full mb-6">
              <thead>
              <tr class="border-b">
                <th class="text-left py-2">Prop</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Description</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b">
                <td class="py-2">isOpen</td>
                <td class="py-2">boolean</td>
                <td class="py-2">false</td>
                <td class="py-2">Controls modal visibility</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">title</td>
                <td class="py-2">string</td>
                <td class="py-2">''</td>
                <td class="py-2">Modal title</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">size</td>
                <td class="py-2">'sm' | 'md' | 'lg' | 'xl'</td>
                <td class="py-2">'md'</td>
                <td class="py-2">Modal size</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">showCloseButton</td>
                <td class="py-2">boolean</td>
                <td class="py-2">true</td>
                <td class="py-2">Show close button</td>
              </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-medium mb-3">Examples</h3>
            <div class="mb-6">
              <ui-button
                label="Open Modal"
                variant="primary"
                onClick={this.toggleModal}
              />
            </div>

            <h3 class="text-xl font-medium mb-3">Usage</h3>
            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
  {`const [showModal, setShowModal] = useState(false);

<ui-button
  label="Open Modal"
  onClick={() => setShowModal(true)}
/>

<ui-modal
  is-open={showModal}
  title="Confirm Action"
  onModalClosed={() => setShowModal(false)}
>
  <div slot="content">
    <p>Are you sure you want to proceed?</p>
  </div>
  <div slot="footer">
    <ui-button onClick={() => setShowModal(false)}>Cancel</ui-button>
    <ui-button variant="primary">Confirm</ui-button>
  </div>
</ui-modal>`}
              </code>
            </pre>
          </div>
        </section>

        {/* Demo Modal */}
        <ui-modal
          is-open={this.showModal}
          title="Modal Demo"
          onModalClosed={() => this.showModal = false}
        >
          <div slot="content">
            <p>This is a demonstration of the modal component.</p>
            <p class="mt-2">Click outside or the close button to dismiss.</p>
          </div>
          <div slot="footer">
            <ui-button onClick={() => this.showModal = false}>Close</ui-button>
          </div>
        </ui-modal>

        {/*  Input Documentation*/}
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">UI Input</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Props</h3>
            <table class="min-w-full mb-6">
              <thead>
              <tr class="border-b">
                <th class="text-left py-2">Prop</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Description</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b">
                <td class="py-2">value</td>
                <td class="py-2">string</td>
                <td class="py-2">''</td>
                <td class="py-2">Input value</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">placeholder</td>
                <td class="py-2">string</td>
                <td class="py-2">'Enter text'</td>
                <td class="py-2">Placeholder text</td>
              </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-medium mb-3">Examples</h3>
            <div class="mb-6">
              <ui-input placeholder="Enter your name"/>
            </div>

            <h3 class="text-xl font-medium mb-3">Usage</h3>
            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
  {`<ui-input
    placeholder="Type here"
    value={this.inputValue}
    onValueChange={(event) => this.handleInputChange(event)}
  />
  `}
              </code>
            </pre>
          </div>
        </section>
      </div>
    );
  }
}
