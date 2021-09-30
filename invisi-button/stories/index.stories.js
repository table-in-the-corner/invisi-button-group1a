import { html } from 'lit';
import '../invisi-button.js';

export default {
  title: 'InvisiButton',
  component: 'invisi-button',
  argTypes: {
    link: { control: 'text' },
    title: { control: 'text' },
    textColor: { control: 'text' },
    icon: { control: 'text'},
    disabled: { control: 'boolean'}
  },
};

function Template({ link = "https://teuxdeux.com/", title = "Join Now", icon = "chevron-right", disabled = false, textColor, slot}) {
  return html`
    <invisi-button
      style="--invisi-button-color: ${textColor || 'white'}"
      .title=${title}
      .link=${link}
      .icon=${icon}
      .disabled=${disabled}
    >
      ${slot}
    </invisi-button>
  `;
}

export const Regular = Template.bind({});


