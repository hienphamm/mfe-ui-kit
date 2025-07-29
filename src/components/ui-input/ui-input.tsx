import {Component, Event, EventEmitter, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'styles.css',
  shadow: true,
})
export class UiInput {
  @Prop({mutable: true, reflect: true}) value: string = '';
  @Prop() placeholder: string = '';
  @Prop() type: string = 'text';
  @Prop() disabled: boolean = false;
  @Prop() class: string = '';

  @Event() valueChange: EventEmitter<string>;

  render() {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
    return (
      <Host>
        <input
          class={`${baseClasses} ${this.class}`}
          type={this.type}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={this.handleInput}
        />
      </Host>
    );
  }

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  };
}
