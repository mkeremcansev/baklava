
import { css } from 'lit';
export default css`
:host {
  display: inline-block;
  position: relative;
  width: auto;
  cursor: pointer;
  --user-select: none;
}

.button {
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: var(--gr-button-height, 40px);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  padding: 12px 24px;
  cursor: inherit;

  font: var(--gr-button-font, var(--gr-font-title-3-medium));
}

:host([block]) {
  display: block;
}

:host([medium]) .button {
  --gr-button-height: 32px;
  padding: 8px 16px;
}


:host([small]) .button {
  --gr-button-height: 24px;
  --gr-button-font: var(--gr-font-title-4-medium);
  padding: 4px 8px;
}

.button::-moz-focus-inner {
  border: 0;
}

.button:focus {
  outline: none;
}

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--disabled * {
  pointer-events: none;
}

.button .button__label {
  padding: 0px 16px;
  line-height: 30px;
}

.button.button--primary {
  background-color: var(--gr-color-primary);
  border-color: var(--gr-color-primary);
  color: #FFFFFF;
}

.button--primary:hover:not(.button--disabled) {
  background-color: var(--gr-color-primary-hover);
  border-color: var(--gr-color-primary-hover);
}

.button.button--secondary {
  background-color: var(--gr-color-secondary);
  border-color: var(--gr-color-secondary);
  color: #FFFFFF;
}

.button--secondary:hover:not(.button--disabled) {
  background-color: var(--gr-color-secondary-hover);
  border-color: var(--gr-color-secondary-hover);
}`;
