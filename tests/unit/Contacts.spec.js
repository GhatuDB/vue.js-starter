import Vue from "vue";
import Vuex from "vuex";
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils";
import Contacts from "@/components/Contacts.vue";

describe('Contacts Screen', () => {

  let store
  let actions
  let localVue
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    actions = {
      contacts: jest.fn(),
    };
    store = new Vuex.Store({
      state: {
        contacts: [{
            name: 'John Smith',
            phone: '+919088776655'
          },
          {
            name: 'Jane Doe',
            phone: '+919011223344'
          },
        ]
      },
      actions
    });
    wrapper = shallowMount(Contacts, {
      store,
      localVue
    });
  });

  it("Should contain title", () => {
    const title = wrapper.find("#app-title");
    expect(title.text()).toEqual("Contacts");
  });

  it("Should contain Add button", () => {
    const button = wrapper.find("#add-button");
    expect(button.text()).toEqual("add");
  });

  it("Should contain Add button link", () => {
    const button = wrapper.find("#add-button");
    expect(button.attributes().to).toEqual("/addcontact");
  });
});

describe('Contacts Listing', () => {

  let store
  let actions
  let localVue
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    actions = {
      contacts: jest.fn(),
    };
    store = new Vuex.Store({
      state: {
        contacts: [{
            name: 'John Smith',
            phone: '+919088776655'
          },
          {
            name: 'Jane Doe',
            phone: '+919011223344'
          },
        ]
      },
      actions
    });
    wrapper = shallowMount(Contacts, {
      store,
      localVue,
      stubs: ['router-link']
    });
  });

  it("Should print all contacts", () => {
    const contacts = wrapper.findAll(".contact-item");
    expect(contacts).toHaveLength(2);
  });

  it("Should link to contact", () => {
    const contacts = wrapper.findAll(".contact-item");
    expect(contacts.at(0).attributes().to).toEqual("/contacts/0");
    expect(contacts.at(1).attributes().to).toEqual("/contacts/1");
  });

  it("Should print contact name", () => {
    const contactNames = wrapper.findAll(".contact-name");
    expect(contactNames.at(0).text()).toEqual("John Smith");
    expect(contactNames.at(1).text()).toEqual("Jane Doe");
  });

  it("Should print contact phone", () => {
    const contactPhones = wrapper.findAll(".contact-phone");
    expect(contactPhones.at(0).text()).toEqual("+919088776655");
    expect(contactPhones.at(1).text()).toEqual("+919011223344");
  });
});
