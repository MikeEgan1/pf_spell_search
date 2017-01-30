import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Spell from '../client/app/Spell.jsx';

describe('<Spell />', function(){
    it('should have props for spell name', function () {
        const wrapper = shallow(<Spell/>);
        expect(wrapper.props().spell_name).to.be.defined;
    });
})