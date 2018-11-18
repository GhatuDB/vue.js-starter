import { shallowMount } from "@vue/test-utils";
import Tournaments from "@/components/Tournaments.vue";

describe('Tournaments.vue', () => {

    it("should print football tournaments", () => {
        const $route = {
            params: { name: "football" }
        };
        const wrapper = shallowMount(Tournaments, {
            mocks: {
                $route
            },
            stubs: ['router-view']
        });

        const title = wrapper.find("p");
        expect(title.text()).toContain("FIFA World Cup * UEFA Euro Cup * Copa América");
    });

    it("should print cricket tournaments", () => {
        const $route = {
            params: { name: "cricket" }
        };
        const wrapper = shallowMount(Tournaments, {
            mocks: {
                $route
            },
            stubs: ['router-view']
        });
        const title = wrapper.find("p");
        expect(title.text()).toContain("ICC ODI World Cup * ICC Champions Trophy * ICC World Twenty20");
    });

    it("should print cricket subheader", () => {
        const $route = {
            params: { name: "cricket" }
        };
        const wrapper = shallowMount(Tournaments, {
            mocks: {
                $route
            }
        });
        const title = wrapper.find("h3");
        expect(title.text()).toContain($route.params.name + " tournaments");
    });
    it("should print football subheader", () => {
        const $route = {
            params: { name: "football" }
        };
        const wrapper = shallowMount(Tournaments, {
            mocks: {
                $route
            }
        });
        const title = wrapper.find("h3");
        expect(title.text()).toContain($route.params.name + " tournaments");
    });
});
