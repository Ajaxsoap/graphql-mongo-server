import { Cat } from './models/Cat'
import { Dog } from './models/Dog';

export const resolvers = {
    Query: {
        hello: () => "Hi",
        allCats: () => Cat.find(),
        allDogs: () => Dog.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            // console.log(kitty);
            return kitty;
        },
        createDog: async (_, { name, breed }) => {
            const doggy = new Dog({ name, breed });
            await doggy.save();
            console.log(doggy);
            return doggy;
        },
        removeCat: () => Dog.deleteOne(id)        
    }
}