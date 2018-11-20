import Vuex from "vuex";
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils";
import Contact from "@/components/Contact.vue";

describe('Contact Screen', () => {

  let store
  let actions
  let localVue
  let $route
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    actions = {
      contacts: jest.fn(),
    };
    $route = {
      params: {
        index: 0
      }
    };
    store = new Vuex.Store({
      state: {
        contacts: [{
          name: 'John Smith',
          phone: '+919088776655'
        }, {
          name: 'Jane Doe',
          phone: '+919022334455'
        }]
      },
      actions
    });
    wrapper = shallowMount(Contact, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
  });

  it("Should contain title", () => {
    const title = wrapper.find("#app-title");
    expect(title.text()).toEqual("Contacts");
  });

  it("Should contain back button", () => {
    const button = wrapper.find("#back-button");
    expect(button.attributes().to).toEqual("/");
  });

  it("Should contain Delete button", () => {
    const button = wrapper.find("#delete-button");
    expect(button.text()).toEqual("delete");
  });

  it("Should not show delete confirmation modal", () => {
    expect(wrapper.vm.dialog).toEqual(false);
  });

  it("Should show delete confirmation modal on click of delete button", () => {
    wrapper.vm.deleteConfirm();
    expect(wrapper.vm.dialog).toEqual(true);
  });

});

describe('Contact Screen: route index 0', () => {

  let store
  let actions
  let localVue
  let $route
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    actions = {
      contacts: jest.fn(),
    };
    $route = {
      params: {
        index: 0
      }
    };
    store = new Vuex.Store({
      state: {
        contacts: [{
          name: 'John Smith',
          phone: '+919088776655'
        }, {
          name: 'Jane Doe',
          phone: '+919022334455'
        }]
      },
      actions
    });
    wrapper = shallowMount(Contact, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
  });

  it("Should print contact username based on route index 0", () => {
    const contactName = wrapper.find("#contact-name");
    expect(contactName.text()).toEqual("John Smith");
  });

  it("Should print contact phone based on route index 0", () => {
    const contactPhone = wrapper.find("#contact-phone");
    expect(contactPhone.text()).toEqual("+919088776655");
  });

});

describe('Contact Screen: route index 1', () => {

  let store
  let actions
  let localVue
  let $route
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    actions = {
      contacts: jest.fn(),
    };
    $route = {
      params: {
        index: 1
      }
    };
    store = new Vuex.Store({
      state: {
        contacts: [{
          name: 'John Smith',
          phone: '+919088776655'
        }, {
          name: 'Jane Doe',
          phone: '+919022334455'
        }]
      },
      actions
    });
    wrapper = shallowMount(Contact, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
  });

  it("Should print contact username based on route index 1", () => {
    const contactName = wrapper.find("#contact-name");
    expect(contactName.text()).toEqual("Jane Doe");
  });

  it("Should print contact phone based on route index 1", () => {
    const contactPhone = wrapper.find("#contact-phone");
    expect(contactPhone.text()).toEqual("+919022334455");
  });

});
