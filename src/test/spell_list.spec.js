import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SpellList from '../client/app/SpellList.jsx';
import Spell from '../client/app/Spell.jsx';

var test_spells = [
    {
        "name": "Detect Magic",
        "description" : "Detects all spells and magic items within 60 ft.",
        "school": "Divination",
        "classes" : "Wizard 0, Sorcerer 0",
        "cast" : "1 Action"
    }
]


describe('<SpellList />', function(){
    it('contains a <Spell /> component', function () {
        const wrapper = mount(<SpellList />);
        wrapper.setState({spells : test_spells})
        expect(wrapper.find(Spell)).to.have.length(1);
    });
})