import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'styles.css',
  shadow: true,
})
export class UiButton {
  @Prop() label: string;
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() variant: 'default' | 'primary' | 'secondary' = 'default';

  @Event() onClick: EventEmitter<void>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.onClick.emit();
    }
    event.preventDefault();
  };

  render() {
    return (
      <button
        class={`
          px-4 py-2 rounded-md
          ${this.variant === 'primary' ? 'bg-blue-500 text-white' : ''}
          ${this.variant === 'secondary' ? 'bg-gray-500 text-white' : ''}
          ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}
          transition-opacity duration-200
        `}
        disabled={this.disabled}
        type={this.type}
        onClick={this.handleClick}
      >
        <slot name="icon" />
        <span>{this.label} </span>
        <slot />
      </button>
    );
  }
}
