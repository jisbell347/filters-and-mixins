export const fruitMixin = {
    //The data that is being applied to the application. 
    data() {
        return {
            text: 'Hello there!',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    //Computed property watches for changes and returns something when they are detected.
    computed: {
        filteredFruits(){
            //Filters the array based on the element being passed in and matches the result(s) from the fruits array.
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    //Lifecycle hook that is established each time the mixin is created.
    created(){
        console.log('Created');
    }

}