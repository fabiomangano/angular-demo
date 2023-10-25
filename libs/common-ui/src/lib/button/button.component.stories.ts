import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  templateUrl: './button.component.html',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text',
  color: 'primary',
  size: 'small',
};
