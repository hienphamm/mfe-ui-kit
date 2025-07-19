import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-card',
  styleUrl: 'styles.css',
  shadow: false,
})
export class UiCard {
  @Prop() heading: string;
  @Prop() image: string;
  @Prop() description: string;
  @Prop() rounded: boolean = true;
  @Prop() shadow: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none' = 'md';
  @Prop() hoverEffect: boolean = false;

  render() {
    const shadowClass = this.shadow !== 'none' ? `shadow-${this.shadow}` : '';
    const roundedClass = this.rounded ? 'rounded-lg' : '';
    const hoverClass = this.hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '';

    return (
      <div class={`bg-white border-2 border-gray-200 overflow-hidden ${roundedClass} ${shadowClass} ${hoverClass}`}>
        {this.image && (
          <img
            src={this.image}
            alt={this.heading}
            class="w-full h-48 object-cover"
          />
        )}
        <div class="p-6">
          {this.heading && (
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {this.heading}
            </h3>
          )}
          {this.description && (
            <p class="text-gray-600 mb-4">
              {this.description}
            </p>
          )}
          <div class="flex justify-end">
            <slot name="actions" />
          </div>
          <slot />
        </div>
      </div>
    );
  }
}
