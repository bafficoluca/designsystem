import React from 'react';
import Icon from '../Icon';
import Search from '../Search';
import SearchSkeleton from '../Search/Search.Skeleton';
import { mount, shallow } from 'enzyme';

describe('Search', () => {
  describe('renders as expected', () => {
    const wrapper = mount(
      <Search
        id="test"
        className="extra-class"
        label="Search Field"
        labelText="testlabel"
        light={false}
      />
    );

    const label = wrapper.find('label');
    const textInput = wrapper.find('input');

    describe('container', () => {
      it('should add extra classes that are passed via className', () => {
        expect(wrapper.hasClass('extra-class')).toEqual(true);
      });
    });

    describe('input', () => {
      it('renders as expected', () => {
        expect(textInput.length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(textInput.hasClass('wfp--search-input')).toEqual(true);
      });

      it('should set type as expected', () => {
        expect(textInput.props().type).toEqual('text');
        wrapper.setProps({ type: 'email' });
        expect(wrapper.find('input').props().type).toEqual('email');
      });

      it('should set value as expected', () => {
        expect(textInput.props().defaultValue).toEqual(undefined);
        wrapper.setProps({ defaultValue: 'test' });
        expect(wrapper.find('input').props().defaultValue).toEqual('test');
        expect(wrapper.find('input').props().value).toEqual(undefined);
      });

      it('should set placeholder as expected', () => {
        wrapper.setProps({ placeholder: 'Enter text' });
        expect(wrapper.find('input').props().placeholder).toEqual('Enter text');
      });

      it('should specify light version as expected', () => {
        expect(wrapper.props().light).toEqual(false);
        wrapper.setProps({ light: true });
        expect(wrapper.props().light).toEqual(true);
      });
    });

    describe('label', () => {
      it('renders a label', () => {
        expect(label.length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(label.hasClass('wfp--label')).toEqual(true);
      });

      it('should set label as expected', () => {
        expect(wrapper.props().label).toEqual('Search Field');
        wrapper.setProps({ label: 'Email Input' });
        expect(wrapper.props().label).toEqual('Email Input');
      });
    });

    describe('Large Search', () => {
      describe('buttons', () => {
        const btns = wrapper.find('button');

        it('should be one button', () => {
          expect(btns.length).toBe(1);
        });

        it('should have type="button"', () => {
          const type1 = btns.first().instance().getAttribute('type');
          const type2 = btns.last().instance().getAttribute('type');
          expect(type1).toEqual('button');
          expect(type2).toEqual('button');
        });
      });

      describe('icons', () => {
        it('renders two Icons', () => {
          const icons = wrapper.find(Icon);
          expect(icons.length).toEqual(2);
        });
      });
    });

    describe('Small Search', () => {
      const small = mount(
        <Search
          id="test"
          kind="small"
          className="extra-class"
          label="Search Field"
          labelText="testlabel"
        />
      );

      // it('should have the expected small class', () => {
      //   expect(small.hasClass('wfp--search--sm')).toEqual(true);
      // });

      it('should only have 1 button (clear)', () => {
        const btn = small.find('button');
        expect(btn.length).toEqual(1);
      });

      it('renders one Icon', () => {
        const icons = small.find(Icon);
        expect(icons.length).toEqual(2);
      });
    });
  });

  describe('events', () => {
    describe('enabled textinput', () => {
      const onClick = jest.fn();
      const onChange = jest.fn();

      const wrapper = shallow(
        <Search
          id="test"
          labelText="testlabel"
          onClick={onClick}
          onChange={onChange}
        />
      );

      const input = wrapper.find('input');
      const eventObject = {
        target: {
          defaultValue: 'test',
        },
      };

      it('should invoke onClick when input is clicked', () => {
        wrapper.simulate('click');
        expect(onClick).toBeCalled();
      });

      it('should invoke onChange when input value is changed', () => {
        wrapper.simulate('change', eventObject);
        expect(onChange).toBeCalledWith(eventObject);
      });
    });
  });
});

describe('SearchSkeleton', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<SearchSkeleton />);

    it('Has the expected classes', () => {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--search--lg')).toEqual(true);
    });
  });
});

describe('SearchSkeleton Small', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<SearchSkeleton small />);

    it('Has the expected classes', () => {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--search--sm')).toEqual(true);
    });
  });
});
