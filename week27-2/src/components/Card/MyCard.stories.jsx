import { MyCard } from './MyCard';

const meta = {
title: 'MyComponent/MyCard',
component: MyCard,
argTypes: {
   backgroundColor: { control: 'color' },
},
};

export default meta;

export const Default = {
args: {
   title: 'Default Card',
   content: 'This is a default card.',
},
};

export const CustomBackground = {
args: {
   title: 'Custom Background Card',
   content: 'This card with custom background color.',
   backgroundColor: '#ffebcc',
},
};

export const LongContent = {
args: {
   title: 'Long Content Card',
   content: 'This card contains a long content. Hello everyone, I am Subin Park. My favorite food is raw meats. I love miku. She is so cute and nice. She always give me hope and love.',
},
};
