import { Component, Prop, h, State, Event, EventEmitter, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ui-modal',
  styleUrl: 'styles.css',
  shadow: false,
})
export class UiModal {
  @Element() hostElement: HTMLElement;

  @Prop() isOpen: boolean = false;
  @Prop() title: string = '';
  @Prop() closeOnBackdropClick: boolean = true;
  @Prop() showCloseButton: boolean = true;
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop() rounded: boolean = true;

  @State() isVisible: boolean = false;
  @State() isMounted: boolean = false;

  @Event() modalClosed: EventEmitter<void>;
  @Event() modalOpened: EventEmitter<void>;

  @Watch('isOpen')
  handleIsOpenChange(newValue: boolean) {
    if (newValue) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  componentDidLoad() {
    if (this.isOpen) {
      this.openModal();
    }
  }

  openModal() {
    this.isMounted = true;
    setTimeout(() => {
      this.isVisible = true;
      this.modalOpened.emit();
      document.body.style.overflow = 'hidden';
    }, 10);
  }

  closeModal() {
    this.isVisible = false;
    setTimeout(() => {
      this.isMounted = false;
      this.modalClosed.emit();
      document.body.style.overflow = '';
    }, 300);
  }

  handleBackdropClick = (event: MouseEvent) => {
    if (event.target === this.hostElement && this.closeOnBackdropClick) {
      this.closeModal();
    }
  };

  render() {
    if (!this.isMounted) return null;

    const sizeClasses = {
      'sm': 'max-w-sm',
      'md': 'max-w-md',
      'lg': 'max-w-lg',
      'xl': 'max-w-xl'
    };

    return (
      <div
        class={`fixed inset-0 z-50 overflow-y-auto ${this.isVisible ? 'visible' : 'invisible'}`}
        aria-labelledby="modal-title"
        aria-modal="true"
        role="dialog"
        onClick={this.handleBackdropClick}
      >
        {/* Background overlay */}
        <div class={`fixed inset-0 transition-opacity ${this.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
          <div class="absolute inset-0 bg-black bg-opacity-25 z-40" style={{ opacity: '0.75' }}></div>
        </div>

        {/* Modal container */}
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* This element is to trick the browser into centering the modal contents */}
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          {/* Actual modal */}
          <div class={`
            inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full
            ${sizeClasses[this.size]}
            ${this.isVisible ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
          `}>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Header */}
              <div class="flex justify-between items-start">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {this.title}
                </h3>
                {this.showCloseButton && (
                  <button
                    type="button"
                    class="ml-4 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => this.closeModal()}
                    aria-label="Close"
                  >
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Content */}
              <div class="mt-4">
                <slot name="content" />
              </div>
            </div>

            {/* Footer */}
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
