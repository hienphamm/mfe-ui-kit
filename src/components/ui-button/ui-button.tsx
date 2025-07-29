import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

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
  @Prop() class: string = '';

  @Event() onClick: EventEmitter<void>;

  render() {
    if (!this.label) return;

    const baseClasses = `
      cursor-pointer
      px-4 py-2 rounded-md
      transition-opacity duration-200
      border border-gray
      ${this.variant === 'primary' ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : ''}
      ${this.variant === 'secondary' ? 'bg-white' : ''}
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
        <span>{this.label} </span>
        <slot name="icon-right"/>
      </button>
    );
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.onClick.emit();
    }
    event.preventDefault();
  };
}
