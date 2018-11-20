import Vuex from "vuex";
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils";
import AddContact from "@/components/AddContact.vue";

describe('Add Contact Screen', () => {

  let localVue
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    wrapper = shallowMount(AddContact);
  });

  it("Should contain title", () => {
    const title = wrapper.find("#app-title");
    expect(title.text()).toEqual("Contacts");
  });

  it("Should contain back button", () => {
    const button = wrapper.find("#back-button");
    expect(button.attributes().to).toEqual("/");
  });

  it("Should contain Add button", () => {
    const button = wrapper.find("#addcontact-button");
    expect(button.text()).toEqual("ADD");
  });

  it("Should contain Name input field", () => {
    const inputfield = wrapper.find("#addcontact-name");
    expect(inputfield.attributes().label).toEqual("Name");
  });

  it("Should contain Phone input field", () => {
    const inputfield = wrapper.find("#addcontact-phone");
    expect(inputfield.attributes().label).toEqual("Phone Number");
  });

  it("Should contain Clear button", () => {
    const button = wrapper.find("#clear-button");
    expect(button.text()).toEqual("Clear");
  });
});