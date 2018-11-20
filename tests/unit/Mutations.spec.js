import mutations from '@/store/mutations'

// destructure assign `mutations`
const { ADD_CONTACT, DELETE_CONTACT } = mutations;

describe('Mutations', () => {
  it('Can add new contact', () => {
    // mock state
    const state = {
      contacts: []
    };
    // apply mutation
    ADD_CONTACT(state, {
      name: 'John Smith',
      phone: '+919088776655'
    })
    // assert result
    expect(state.contacts.length).toEqual(1);
    expect(state.contacts[0].name).toEqual('John Smith');
    expect(state.contacts[0].phone).toEqual('+919088776655');
  })

  it('Can delete contact at given position', () => {
    // mock state
    const state = {
      contacts: [{
        name: 'John Smith',
        phone: '+919088776655'  
      }, {
        name: 'Jane Doe',
        phone: '+919044556677'
      }]
    };
    // apply mutation
    DELETE_CONTACT(state, 0);
    // assert result
    expect(state.contacts.length).toEqual(1);
    expect(state.contacts[0].name).toEqual('Jane Doe');
    expect(state.contacts[0].phone).toEqual('+919044556677');
  })
})