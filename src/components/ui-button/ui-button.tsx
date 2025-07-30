import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'styles.css',
  shadow: false,
})
export class UiButton {
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() variant: 'default' | 'primary' | 'secondary' = 'default';
  @Prop() class: string = '';

  @Event() onClick: EventEmitter<void>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.onClick.emit();
    }
    event.preventDefault();
  };

  render() {
    const baseClasses = `
      cursor-pointer
      px-4 py-2 rounded-md
      transition-opacity duration-200
      border border-gray-300
      flex items-center gap-2
      ${this.variant === 'primary' ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-transparent' : ''}
      ${this.variant === 'secondary' ? 'bg-white hover:bg-gray-50' : ''}
      ${this.variant === 'default' ? 'bg-gray-100 hover:bg-gray-200' : ''}
      ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}
    `;

    return (
      <button
        class={`${baseClasses} ${this.class}`}
        disabled={this.disabled}
        type={this.type}
        onClick={this.handleClick}
      >
        <slot name="icon-left"/>
        {this.label && <span>{this.label}</span>}
        <slot />
        <slot name="icon-right"/>
      </button>
    );
  }
}
