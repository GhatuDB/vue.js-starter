import { shallowMount } from "@vue/test-utils";
import Sport from "@/components/Sport.vue";

describe('Sport.vue', () => {
    it("should show description of cricket", () => {
        const $route = {
            params: { name: "cricket" }
        };
        const wrapper = shallowMount(Sport, {
            mocks: {
                $route
            },
            stubs: ['router-view', 'router-link']
        });
        const title = wrapper.find("p");
        expect(title.text()).toContain("Cricket is a sport which is played between two teams of eleven players each who score runs (points) by running between two sets of three small, wooden posts called wickets. Each of the wickets is at one end of a rectangle of flattened grass called the pitch. Around the pitch is a much larger oval of grass called the cricket ground.");
    });

    it("should show description of football", () => {
        const $route = {
            params: { name: "football" }
        };
        const wrapper = shallowMount(Sport, {
            mocks: {
                $route
            },
            stubs: ['router-view', 'router-link']
        });
        const title = wrapper.find("p");
        expect(title.text()).toContain("Football is a sport which is played between two teams of eleven players each The game is played by kicking a ball into the opponents goal. A match has 90 minutes of play, with a break of 15 minutes during the match. The 90 minutes of play also includes extra time. The break in the middle is called half-time.");
    });


    it("should print cricket tournaments link", () => {
        const $route = {
            params: { name: "cricket" }
        };
        const wrapper = shallowMount(Sport, {
            mocks: {
                $route
            },
            stubs: ['router-view', 'router-link']
        });
        const title = wrapper.find(".link");
        expect(title.text()).toContain("major tournaments");
    });


    it("should print football tournaments link", () => {
        const $route = {
            params: { name: "football" }
        };
        const wrapper = shallowMount(Sport, {
            mocks: {
                $route
            },
            stubs: ['router-view', 'router-link']
        });
        const title = wrapper.find(".link");
        expect(title.text()).toContain("major tournaments");
    });
});

