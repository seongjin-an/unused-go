import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {MainTemplate} from "../components/templates/main";
import {Header} from "../components/organisms/header/Header";
import styled from "styled-components";

export default {
    title: 'Example/Template',
    component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => <DashWrap><MainTemplate {...args} /></DashWrap>;

export const Normal = Template.bind({});
Normal.args = {

};
const DashWrap = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
  background-color: #0F0655;
`