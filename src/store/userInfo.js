import { create } from 'zustand';

export const useUserInfo = create((set) => ({
    fname: '',
    lname: '',
    email: '',
    age: '',
    address: '',
    phoneNumber: '',
    
    setFirstName: (fname) => set({ fname }),
    setLastName: (lname) => set({ lname }),
    setEmail: (email) => set({ email }),
    setAge: (age) => set({ age }),
    setAddress: (address) => set({ address }),
    setPhoneNumber: (phoneNumber) => set({ phoneNumber })
}))