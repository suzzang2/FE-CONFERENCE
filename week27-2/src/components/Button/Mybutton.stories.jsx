import MyButton from "./Mybutton";

const meta = {
   title: 'MyComponent/MyButton',
   component: MyButton,
   argTypes: {
      backgroundColor: { control: 'color' }, //색을 바꿔보면서 확인
   },
};

export default meta;

export const Primary = {
   args: {
      children: 'Button',
      backgroundColor: '#ffc6c6',
   },
};