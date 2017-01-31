import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SpellList from '../client/app/SpellList.jsx';
import Spell from '../client/app/Spell.jsx';

describe('<SpellList />', function(){
    it('contains a <Spell /> component', function () {
        const wrapper = mount(<SpellList/>);
        expect(wrapper.find(Spell)).to.have.length(1);
    });
})