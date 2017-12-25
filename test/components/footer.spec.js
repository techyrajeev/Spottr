import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer                     from '../../src/components/footer';

describe("<Footer />", () => {
    it("Footer contains footer html tag", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.type()).to.equal('footer');
    });

    it("Footer contains brand icon", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find(".material-icons").text()).to.equal('view_module');
    });

    it("Footer renders footer markup correctly", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.html()).to.equal('<footer><i class="material-icons">view_module</i> KulrSpottr</footer>');
    });

});
