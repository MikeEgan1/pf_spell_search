import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SpellList from '../client/app/SpellList';
import Spell from '../client/app/Spell';

var mockSpells = [
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
        const wrapper = shallow(<SpellList spells={mockSpells}/>);
        expect(wrapper.find(Spell)).to.have.length(1);
    });
})